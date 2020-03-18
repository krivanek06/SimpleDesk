import * as requestAction from './request.action';
import {Injectable} from "@angular/core";
import {act, Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {RequestHttpService} from "../../../api/request-http.service";
import * as RequestAction from "./request.action";
import {catchError, filter, map, mergeMap, switchMap, withLatestFrom} from "rxjs/operators";
import {isDashboardLoaded} from "./request.reducer";
import {Action, Store} from "@ngrx/store";
import {RequestState} from "../../../core/model/appState.model";
import {CustomDocument} from "../../../core/model/Request";
import {SwallNotificationService} from "../../../shared/services/swall-notification.service";
import {RequestPosition} from "../../../core/enum/request.enum";


@Injectable()
export class RequestEffects {
  constructor(private actions$: Actions,
              private swallNotification: SwallNotificationService,
              private requestHttpService: RequestHttpService,
              private store: Store<RequestState>) {
  }


  getOpenRequests$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.getOpenRequests),
    withLatestFrom(this.store.select(isDashboardLoaded)),
    filter(([_, loaded]) => !loaded),
    mergeMap(
      () => this.requestHttpService.getRequestOnDashboard()
        .pipe(
          map(requests => RequestAction.getOpenRequestsSuccess({requests})),
          catchError(error => of(RequestAction.getOpenRequestsError({error})))
        )
    )));

  getClosedRequest$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.getClosedRequests),
    switchMap(action => this.requestHttpService.getClosedRequests(action.dateFrom, action.dateTo)
      .pipe(
        map((requests) => RequestAction.getClosedRequestsSuccess({
          requests,
          dateTo: action.dateTo,
          dateFrom: action.dateFrom
        })),
        catchError((error) => of(RequestAction.getClosedRequestsError({error})))
      )
    )));


  modifyMeAsSolver$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(
      RequestAction.assignMeOnRequest,
      RequestAction.removeMeOnRequest
    ),
    switchMap((action) => this.requestHttpService.assignOrRemoveRequestOnMe(action.request.id, !!action.userSimpleDTO)
      .pipe(
        map(() => {
          const text = !!action.userSimpleDTO ? `Pridelené` : `Vzdané`;
          this.swallNotification.generateNotification(text);
          return RequestAction.modifiedSolverOnRequestSuccess({
            requestId: action.request.id,
            userSimpleDTO: action.userSimpleDTO,
            requestPosition: !!action.userSimpleDTO ? RequestPosition.Assigned : RequestPosition.UnAssigned,
          });
        }),
        catchError(error => of(RequestAction.modifiedSolverOnRequestFailure({error})))
      )
    )));

  addRandomSolver$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.addRandomSolver),
    switchMap((action) => this.requestHttpService.assignSolver(action.requestId, action.userSimpleDTO)
      .pipe(
        map((solver) => RequestAction.modifiedSolverOnRequestSuccess({
          requestId: action.requestId,
          userSimpleDTO: solver,
          requestPosition: RequestPosition.Assigned,
        })),
        catchError(error => of(RequestAction.modifiedSolverOnRequestFailure({error})))
      )
    )));


  createTicket$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.createTicket),
    switchMap(action =>
      this.requestHttpService.submitTicket(action.ticketForm).pipe(
        switchMap((request) => this.requestHttpService.uploadFileForRequest(request.id, action.fileList)
          .pipe(
            map(() => {
              this.swallNotification.generateNotification(`Vaša požiadavka s id : ${request.id}. bola zaznamenaná. `);
              return requestAction.createRequestSuccess({request});
            }),
            catchError(error => of(requestAction.createRequestFailure({error})))
          )
        )
      ))));

  createReport$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.createReport),
    switchMap(action =>
      this.requestHttpService.submitReport(action.reportForm).pipe(
        switchMap((request) => this.requestHttpService.uploadFileForRequest(request.id, action.fileList)
          .pipe(
            map(() => {
              this.swallNotification.generateNotification(`Vaša požiadavka s id : ${request.id}. bola zaznamenaná. `);
              return requestAction.createRequestSuccess({request});
            }),
            catchError(error => of(requestAction.createRequestFailure({error})))
          )
        )
      ))));

  createFinance$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.createFinance),
    switchMap(action =>
      this.requestHttpService.submitFinance(action.financeForm).pipe(
        switchMap((request) => this.requestHttpService.uploadFileForRequest(request.id, action.fileList)
          .pipe(
            map(() => {
              this.swallNotification.generateNotification(`Vaša požiadavka s id : ${request.id}. bola zaznamenaná. `);
              return requestAction.createRequestSuccess({request});
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
    switchMap(action => this.requestHttpService.uploadFileForRequest(action.requestId, action.fileList)
      .pipe(
        map(() => {
          const customDocuments: CustomDocument[] = [];
          for (let i = 0; i < action.fileList.length; i++) {
            const file = action.fileList.item(i);
            customDocuments.push({
              name: file.name,
              lastModified: new Date().getTime()
            });
          }
          return requestAction.uploadFileSuccess({requestId: action.requestId, customDocuments});
        }),
        catchError(error => of(requestAction.uploadFileFailure({error})))
      )
    )));

  downloadFilesForRequest$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.downloadFiles),
    switchMap(action => this.requestHttpService.downloadFileForRequest(action.id, action.fileName)
      .pipe(
        map((file) => requestAction.downloadFilesSuccess({file, fileName: action.fileName})),
        catchError(error => of(requestAction.downloadFilesFailure({error})))
      )
    )));

  blockCommentingRequest$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.toggleCommenting),
    switchMap(action => this.requestHttpService.changeCommenting(action.request.id)
      .pipe(
        map(() => {
          const allowCommenting = !action.request.allowCommenting;
          this.swallNotification.generateNotification(
            allowCommenting ? 'Komentovanie požiadavky sa zakázalo' : 'Komentovanie požiadavky sa povolilo');
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
          this.swallNotification.generateNotification(`Komentár bol odoslaný`);
          return RequestAction.addCommentSuccess({requestComment});
        }),
        catchError((error) => of(RequestAction.addCommentFailure({error})))
      )
    )));

  editComment$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.editComment),
    switchMap(action => this.requestHttpService.editComment(action.requestComment)
      .pipe(
        map(() => {
          this.swallNotification.generateNotification(`Komentár bol zmenený`);
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
          this.swallNotification.generateNotification(`Komentár bol zmazaný`);
          return RequestAction.deleteCommentSuccess({requestComment: action.requestComment});
        }),
        catchError((error) => of(RequestAction.deleteCommentFailure({error})))
      )
    )));

  shareComment$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.shareComment),
    switchMap(action => this.requestHttpService.shareComment(action.requestComment)
      .pipe(
        map(() => {
          this.swallNotification.generateNotification(`Komentár bol vyzdieľaný`);
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
          this.swallNotification.generateNotification(`Viditeľnosť komentára bolo zmenené`);
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
          this.swallNotification.generateNotification(`Nadhodnocenie reportu bolo zaznamenané`);
          return RequestAction.addReportEvaluationSuccess({requestId: action.requestId, days: action.days});
        }),
        catchError((error) => of(RequestAction.addReportEvaluationFailure({error})))
      )
    )));

  modifiedStateRequest$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.closeRequest, RequestAction.reopenRequest),
    switchMap(action => this.requestHttpService.changeState(action.requestId, !!action.userSimpleDTO)
      .pipe(
        map(() => {
          const state = !!action.date ? 'uzavretá' : 'otvorená';
          this.swallNotification.generateNotification(`Požiadavka ${action.requestId}. bola ${state}`);
          return RequestAction.modifiedStateRequestSuccess({
            requestId: action.requestId,
            userSimpleDTO: action.userSimpleDTO,
            date: action.date,
            requestPosition: !!action.date ? RequestPosition.Closed : RequestPosition.Assigned,
          });
        }),
        catchError((error) => of(RequestAction.modifiedStateRequestFailure({error})))
      )
    )));

  changePriority$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(RequestAction.changePriority),
    switchMap(action => this.requestHttpService.changePriority(action.requestId, action.priority)
      .pipe(
        map(() => {
          this.swallNotification.generateNotification(`Priorita bola zmenená`);
          return RequestAction.changePrioritySuccess({requestId: action.requestId, priority: action.priority});
        }),
        catchError((error) => of(RequestAction.changePriorityFailure({error})))
      )
    )));
}
