import * as requestAction from './request.action';
import {Injectable} from "@angular/core";
import {act, Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {RequestHttpService} from "../../../core/api/request-http.service";
import {catchError, filter, map, mergeMap, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../../../core/model/appState.model";
import {RequestPosition} from "../model/request.enum";
import {saveAs} from 'file-saver';
import {Request} from "../model/Request";

import * as RequestAction from "./request.action";
import * as LoadingAction from "../../../core/store/loading/loader.action";
import * as fromUser from '../../../core/store/user/user.reducer';
import * as fromRequest from "./request.reducer";
import {GroupHttpService} from "../../../core/api/group-http.service";
import {swallNotification} from "../../../shared/utils/swall-notification";

@Injectable()
export class RequestEffects {
  constructor(private actions$: Actions,
              private requestHttpService: RequestHttpService,
              private groupHttpService: GroupHttpService,
              private store: Store<AppState>) {
  }

  initializeWebsocketConnectionForRequests$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.initializeWebsocketConnectionForRequests),
    withLatestFrom(this.store.select(fromRequest.isWebsocketConnected)),
    filter(([_, loaded]) => !loaded),
    switchMap(() => this.store.select(fromUser.getUser)
      .pipe(
        switchMap(user => this.requestHttpService.initializeWebsocketConnection(user.username)
          .pipe(
            map((response) => {
              const request: Request = JSON.parse(response.body);
              if (!request.logs || request.logs[request.logs.length - 1] !== 'DELETE') {
                return RequestAction.updateRequestFromAPI({request});
              }
              return RequestAction.deleteRequestFromAPI({request});
            }),
            catchError((error) => of(RequestAction.initializeWebsocketConnectionForRequestsFailure({error})))
          ))
      )
    )
  ));

  getOpenRequests$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.getOpenRequests),
    withLatestFrom(this.store.select(fromRequest.isDashboardLoaded)),
    filter(([_, loaded]) => !loaded),
    tap(() => this.store.dispatch(LoadingAction.loadingStart())),
    switchMap(() => this.requestHttpService.getRequestOnDashboard()
      .pipe(
        tap(() => this.store.dispatch(LoadingAction.loadingFinished())),
        map(requests => RequestAction.getOpenRequestsSuccess({requests})),
        catchError(error => of(RequestAction.getOpenRequestsError({error})))
      )
    ),
  ));


  getClosedRequest$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.getClosedRequests),
    tap(() => this.store.dispatch(LoadingAction.loadingStart())),
    switchMap(action => this.requestHttpService.getClosedRequests(action.customDate.dateFrom, action.customDate.dateTo)
      .pipe(
        tap(() => this.store.dispatch(LoadingAction.loadingFinished())),
        map((requests) => RequestAction.getClosedRequestsSuccess({
          requests,
          customDate: action.customDate
        })),
        catchError((error) => of(RequestAction.getClosedRequestsError({error})))
      )
    )));


  modifyMeAsSolver$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(
      RequestAction.assignMeOnRequest,
      RequestAction.removeMeOnRequest
    ),
    switchMap((action) => this.requestHttpService.assignOrRemoveRequestOnMe(action.request.id, action.assign)
      .pipe(
        switchMap(() => this.store.select(fromUser.getUser)
          .pipe(
            map((user) => {
              const text = action.assign ? `Pridelené` : `Vzdané`;
              swallNotification(text);
              return RequestAction.modifiedSolverOnRequestSuccess({
                requestId: action.request.id,
                userSimpleDTO: action.assign ? user : undefined,
                requestPosition: action.assign ? RequestPosition.Assigned : RequestPosition.UnAssigned,
              });
            }),
            catchError(error => of(RequestAction.modifiedSolverOnRequestFailure({error})))
          ))
      )
    )));

  addRandomSolver$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.addRandomSolver),
    switchMap((action) => this.requestHttpService.assignSolver(action.requestId, action.userSimpleDTO)
      .pipe(
        map((solver) => {
          swallNotification(`Požiadavka pridelená na užívateľa ${solver.userShortedName}`);
          return RequestAction.modifiedSolverOnRequestSuccess({
            requestId: action.requestId,
            userSimpleDTO: solver,
            requestPosition: RequestPosition.Assigned,
          });
        }),
        catchError(error => of(RequestAction.modifiedSolverOnRequestFailure({error})))
      )
    )));


  createTicket$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.createTicket),
    switchMap(action =>
      this.requestHttpService.submitTicket(action.ticketForm).pipe(
        switchMap((request) => this.requestHttpService.uploadFileForRequest(request.id, action.customDocuments)
          .pipe(
            map(() => {
              swallNotification(`Vaša požiadavka s id : ${request.id}. bola zaznamenaná. `);
              return requestAction.createRequestSuccess({
                request,
                customDocuments: action.customDocuments ? action.customDocuments : []
              });
            }),
            catchError(error => of(requestAction.createRequestFailure({error})))
          )
        )
      ))));

  createReport$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.createReport),
    switchMap(action =>
      this.requestHttpService.submitReport(action.reportForm).pipe(
        switchMap((request) => this.requestHttpService.uploadFileForRequest(request.id, action.customDocuments)
          .pipe(
            map(() => {
              swallNotification(`Vaša požiadavka s id : ${request.id}. bola zaznamenaná. `);
              return requestAction.createRequestSuccess({
                request,
                customDocuments: action.customDocuments ? action.customDocuments : []
              });
            }),
            catchError(error => of(requestAction.createRequestFailure({error})))
          )
        )
      ))));

  createFinance$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.createFinance),
    switchMap(action =>
      this.requestHttpService.submitFinance(action.financeForm).pipe(
        switchMap((request) => this.requestHttpService.uploadFileForRequest(request.id, action.customDocuments)
          .pipe(
            map(() => {
              swallNotification(`Vaša požiadavka s id : ${request.id}. bola zaznamenaná. `);
              return requestAction.createRequestSuccess({
                request,
                customDocuments: action.customDocuments ? action.customDocuments : []
              });
            }),
            catchError(error => of(requestAction.createRequestFailure({error})))
          )
        )
      ))));


  removeLogs$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.removeLogs),
    switchMap(action => this.requestHttpService.removeLogs(action.requestId)
      .pipe(
        map(() => requestAction.removeLogsSuccess({requestId: action.requestId})),
        catchError(error => of(requestAction.removeLogsFailure({error})))
      )
    )));

  uploadFilesForRequest$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.uploadFile),
    switchMap(action => this.requestHttpService.uploadFileForRequest(action.requestId, action.customDocuments)
      .pipe(
        map(() => requestAction.uploadFileSuccess({
          requestId: action.requestId,
          customDocuments: action.customDocuments
        })),
        catchError(error => of(requestAction.uploadFileFailure({error})))
      )
    )));

  downloadFilesForRequest$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.downloadFiles),
    switchMap(action => this.requestHttpService.downloadFileForRequest(action.id, action.fileName)
      .pipe(
        map((file) => {
          saveAs(file, action.fileName);
          return requestAction.downloadFilesSuccess();
        }),
        catchError(error => of(requestAction.downloadFilesFailure({error})))
      )
    )));

  blockCommentingRequest$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.toggleCommenting),
    switchMap(action => this.requestHttpService.changeCommenting(action.request.id)
      .pipe(
        map(() => {
          const allowCommenting = !action.request.allowCommenting;
          swallNotification(allowCommenting ? 'Komentovanie požiadavky sa povolilo' : 'Komentovanie požiadavky sa zakázalo');
          return requestAction.toggleCommentingSuccess({requestId: action.request.id, allowCommenting});
        }),
        catchError(error => of(requestAction.toggleCommentingFailure({error})))
      )
    )));

  addComment$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.addComment),
    switchMap(action => this.requestHttpService.addComment(action.requestCommentWrapper)
      .pipe(
        map((requestComment) => {
          swallNotification(`Komentár bol odoslaný`);
          const solutionComment = action.requestCommentWrapper.solution ? requestComment.id : action.request.solutionComment;
          return RequestAction.addCommentSuccess({requestComment, solutionComment});
        }),
        catchError((error) => of(RequestAction.addCommentFailure({error})))
      )
    )));

  editComment$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.editComment),
    switchMap(action => this.requestHttpService.editComment(action.requestComment, action.comment)
      .pipe(
        map(() => {
          swallNotification(`Komentár bol zmenený`);
          return RequestAction.editCommentSuccess({
            requestComment: action.requestComment,
            comment: action.comment
          });
        }),
        catchError((error) => of(RequestAction.editCommentFailure({error})))
      )
    )));

  deleteComment$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.deleteComment),
    switchMap(action => this.requestHttpService.deleteComment(action.requestComment)
      .pipe(
        map(() => {
          swallNotification(`Komentár bol zmazaný`);
          return RequestAction.deleteCommentSuccess({requestComment: action.requestComment});
        }),
        catchError((error) => of(RequestAction.deleteCommentFailure({error})))
      )
    )));

  shareComment$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.shareComment),
    switchMap(action => this.requestHttpService.shareComment(action.requestComment, action.groupName)
      .pipe(
        map(() => {
          swallNotification(`Komentár bol vyzdieľaný`);
          return RequestAction.shareCommentSuccess({
            requestComment: action.requestComment,
            groupName: action.groupName
          });
        }),
        catchError((error) => of(RequestAction.shareCommentFailure({error})))
      )
    )));

  changeCommentPrivacy$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.changeCommentPrivacy),
    switchMap(action => this.requestHttpService.changePrivacy(action.requestComment)
      .pipe(
        map(() => {
          swallNotification(`Viditeľnosť komentára bolo zmenené`);
          return RequestAction.changeCommentPrivacySuccess({
            requestComment: action.requestComment,
            privacy: !action.requestComment.isPrivate
          });
        }),
        catchError((error) => of(RequestAction.changeCommentPrivacyFailure({error})))
      )
    )));

  addReportEvaluation$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.addReportEvaluation),
    switchMap(action => this.requestHttpService.addReportEvaluation(action.requestId, action.days)
      .pipe(
        map(() => {
          swallNotification(`Nadhodnocenie reportu bolo zaznamenané`);
          return RequestAction.addReportEvaluationSuccess({requestId: action.requestId, days: action.days});
        }),
        catchError((error) => of(RequestAction.addReportEvaluationFailure({error})))
      )
    )));

  modifiedStateRequest$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.closeRequest, RequestAction.reopenRequest),
    switchMap(action => this.requestHttpService.changeState(action.requestId, action.close)
      .pipe(
        switchMap(() => this.store.select(fromUser.getUser)
          .pipe(
            map((userDTO) => {
              const state = action.close ? 'uzavretá' : 'otvorená';
              swallNotification(`Požiadavka ${action.requestId}. bola ${state}`);
              return RequestAction.modifiedStateRequestSuccess({
                requestId: action.requestId,
                userDTO: action.close ? userDTO : undefined,
                date: action.date,
                requestPosition: action.close ? RequestPosition.Closed : RequestPosition.Assigned,
              });
            }),
            catchError((error) => of(RequestAction.modifiedStateRequestFailure({error})))
          )
        ))
    )));

  changePriority$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.changePriority),
    switchMap(action => this.requestHttpService.changePriority(action.requestId, action.priority)
      .pipe(
        tap(() => swallNotification(`Priorita bola zmenená`)),
        map(() => RequestAction.changePrioritySuccess({requestId: action.requestId, priority: action.priority})),
        catchError((error) => of(RequestAction.changePriorityFailure({error})))
      )
    )));

  getTicketSubtypes$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.getTicketSubtypes),
    withLatestFrom(this.store.select(fromRequest.isTicketTypesLoaded)),
    filter(([_, loaded]) => !loaded),
    switchMap(() => this.requestHttpService.getTicketSubtype()
      .pipe(
        map((ticketSubtype) => RequestAction.getTicketSubtypesSuccess({ticketSubtype})),
        catchError((error) => of(RequestAction.getTicketSubtypesError({error})))
      ))
  ));

  getFinanceTypes$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.getFinanceTypes),
    withLatestFrom(this.store.select(fromRequest.isFinanceTypesLoaded)),
    filter(([_, loaded]) => !loaded),
    switchMap(() => this.requestHttpService.getFinanceTypesAll()
      .pipe(
        map((financeType) => RequestAction.getFinanceTypesSuccess({financeType})),
        catchError((error) => of(RequestAction.getFinanceTypesError({error})))
      ))
  ));

  getGroupToShare$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.getGroupToShare),
    switchMap((action) => this.groupHttpService.getGroupDetails(action.groupName)
      .pipe(
        map((group) => RequestAction.getGroupToShareSuccess({group})),
        catchError((error) => of(RequestAction.getGroupToShareError({error})))
      ))
  ));



}
