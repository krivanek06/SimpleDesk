import * as RequestAction from './request.action';
import {Request, RequestComment} from "../../../core/model/Request";
import {Action, createFeatureSelector, createReducer, createSelector, on, State} from '@ngrx/store';
import {RequestState} from "../../../core/model/appState.model";
import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";
import {routerSelector} from "../../../shared/utils/router.serializer";
import {saveAs} from 'file-saver';
import {RequestPosition} from "../../../core/enum/request.enum";

export const requestAdapter: EntityAdapter<Request> = createEntityAdapter<Request>();
export const commentAdapter: EntityAdapter<RequestComment> = createEntityAdapter<RequestComment>();

export const initialState: RequestState = requestAdapter.getInitialState({
  error: undefined,
  loadedDashboard: false,
  loadedClosed: false,
  closedRequestDateFrom: undefined,
  closedRequestDateTo: undefined,
});


const requestReducer = createReducer(initialState,
  on(RequestAction.getOpenRequests,
    RequestAction.getClosedRequests,
    RequestAction.closeRequest,
    RequestAction.reopenRequest,
    RequestAction.assignMeOnRequest,
    RequestAction.removeLogs,
    RequestAction.removeMeOnRequest,
    RequestAction.addComment,
    RequestAction.editComment,
    RequestAction.shareComment,
    RequestAction.deleteComment,
    RequestAction.changeCommentPrivacy,
    RequestAction.changePriority,
    RequestAction.reopenRequest,
    RequestAction.closeRequest,
    RequestAction.uploadFile,
    RequestAction.downloadFiles,
    RequestAction.toggleCommenting,
    RequestAction.addReportEvaluation,
    RequestAction.addRandomSolver,
    RequestAction.attachCommentAsSolution,
    (state) => ({...state})
  ),
  on(RequestAction.getOpenRequestsSuccess,
    (state, {requests}) => (
      requestAdapter.addMany(requests, {...state, loadedDashboard: true})
    )
  ),
  on(RequestAction.getClosedRequestsSuccess,
    (state, {requests, dateFrom, dateTo}) => (
      requestAdapter.upsertMany(requests, {
        ...state,
        loadedClosed: true,
        closedRequestDateFrom: dateFrom,
        closedRequestDateTo: dateTo
      })
    )
  ),
  on(
    RequestAction.attachCommentAsSolutionSuccess,
    (state, {requestComment, request}) => (
      requestAdapter.updateOne({
        id: request.id,
        changes: {
          ...state.entities[request.id],
          solutionComment: requestComment.id
        }
      }, state)
    )
  ),
  on(RequestAction.createRequestSuccess,
    (state, {request}) => (
      requestAdapter.addOne(request, state)
    )
  ),
  on(RequestAction.modifiedSolverOnRequestSuccess,
    (state, {requestId, userSimpleDTO, requestPosition}) => (
      requestAdapter.updateOne({
        id: requestId,
        changes: {...state.entities[requestId], assigned: userSimpleDTO, requestPosition}
      }, state)
    )
  ),
  on(RequestAction.removeLogsSuccess,
    (state, {requestId}) => (
      requestAdapter.updateOne({id: requestId, changes: {...state.entities[requestId], logs: undefined}}, state)
    )
  ),
  on(
    RequestAction.toggleCommentingSuccess,
    (state, {requestId, allowCommenting}) => (
      requestAdapter.updateOne({
        id: requestId,
        changes: {
          ...state.entities[requestId],
          allowCommenting
        }
      }, state)
    )
  ),
  on(
    RequestAction.modifiedStateRequestSuccess,
    (state, {requestId, userSimpleDTO, date, requestPosition}) => (
      requestAdapter.updateOne({
        id: requestId,
        changes: {
          ...state.entities[requestId],
          timestampClosed: date,
          closed: userSimpleDTO,
          requestPosition,
        }
      }, state)
    )
  ),
  on(
    RequestAction.changePrioritySuccess,
    (state, {requestId, priority}) => (
      requestAdapter.updateOne({
        id: requestId,
        changes: {...state.entities[requestId], requestPriority: priority}
      }, state)
    )
  ),
  on(
    RequestAction.addCommentSuccess,
    (state, {requestComment}) => (
      requestAdapter.updateOne({
        id: requestComment.requestId,
        changes: {
          ...state.entities[requestComment.requestId],
          requestCommentDTOS: [...[requestComment]] // [...state.entities[requestComment.requestId].requestCommentDTOS, requestComment]
        }
      }, state)
    )
  ),
  on(
    RequestAction.changeCommentPrivacySuccess,
    (state, {requestComment, privacy}) => (
      requestAdapter.updateOne({
        id: requestComment.requestId,
        changes: {
          ...state.entities[requestComment.requestId],
          requestCommentDTOS: [
            ...state.entities[requestComment.requestId].requestCommentDTOS.filter(item => item.id !== requestComment.id),
            state.entities[requestComment.requestId].requestCommentDTOS.find(item => item.id === requestComment.id).isPrivate = privacy
          ].sort((a: RequestComment, b: RequestComment) => a.id - b.id)
        }
      }, state)
    )
  ),
  on(
    RequestAction.shareCommentSuccess,
    (state, {requestComment, groupName}) => (
      requestAdapter.updateOne({
        id: requestComment.requestId,
        changes: {
          ...state.entities[requestComment.requestId],
          requestCommentDTOS: [
            ...state.entities[requestComment.requestId].requestCommentDTOS.filter(item => item.id !== requestComment.id),
            state.entities[requestComment.requestId].requestCommentDTOS.find(
              item => item.id === requestComment.id).groupsToShare = [...groupName]
          ].sort((a: RequestComment, b: RequestComment) => a.id - b.id)
        }
      }, state)
    )
  ),
  on(
    RequestAction.editCommentSuccess,
    (state, {requestComment, comment}) => (
      requestAdapter.updateOne({
        id: requestComment.requestId,
        changes: {
          ...state.entities[requestComment.requestId],
          requestCommentDTOS: [
            ...state.entities[requestComment.requestId].requestCommentDTOS.filter(item => item.id !== requestComment.id),
            state.entities[requestComment.requestId].requestCommentDTOS.find(item => item.id === requestComment.id).comment = comment
          ].sort((a: RequestComment, b: RequestComment) => a.id - b.id)
        }
      }, state)
    )
  ),
  on(
    RequestAction.deleteCommentSuccess,
    (state, {requestComment}) => (
      requestAdapter.updateOne({
        id: requestComment.requestId,
        changes: {
          ...state.entities[requestComment.requestId],
          requestCommentDTOS: [
            ...state.entities[requestComment.requestId].requestCommentDTOS.filter(comment => comment.id !== requestComment.id)
          ]
        }
      }, state)
    )
  ),
  on(
    RequestAction.downloadFilesSuccess,
    (state, {file, fileName}) => (saveAs(file, fileName))
  ),
  on(
    RequestAction.uploadFileSuccess,
    (state, {requestId, customDocuments}) => (
      requestAdapter.updateOne({
        id: requestId,
        changes: {
          ...state.entities[requestId],
          documents: {
            ...state.entities[requestId].documents,
            ...customDocuments
          }
        }
      }, state)
    )
  ),
  on(
    RequestAction.addReportEvaluationSuccess,
    (state, {requestId, days}) => (
      requestAdapter.updateOne({
        id: requestId,
        changes: {
          ...state.entities[requestId],
          extendedInformation: {
            ...state.entities[requestId].extendedInformation,
            evaluation: days
          }
        }
      }, state)
    )
  ),
  on(RequestAction.getOpenRequestsError,
    RequestAction.getClosedRequestsError,
    RequestAction.modifiedSolverOnRequestFailure,
    RequestAction.modifiedStateRequestFailure,
    RequestAction.removeLogsFailure,
    RequestAction.changeCommentPrivacyFailure,
    RequestAction.editCommentFailure,
    RequestAction.shareCommentFailure,
    RequestAction.deleteCommentFailure,
    RequestAction.addCommentFailure,
    RequestAction.changePriorityFailure,
    RequestAction.addReportEvaluationFailure,
    RequestAction.toggleCommentingFailure,
    RequestAction.downloadFilesFailure,
    RequestAction.uploadFileFailure,
    RequestAction.createRequestFailure,
    RequestAction.attachCommentAsSolutionFailure,
    (state, {error}) => ({...state, error})
  )
  )
;


export function reducer(state: RequestState | undefined, action: Action) {
  return requestReducer(state, action);
}


export const getRequestState = createFeatureSelector<RequestState>('requirement');

export const isDashboardLoaded = createSelector(getRequestState, (state: RequestState) => state.loadedDashboard);
export const isClosedLoaded = createSelector(getRequestState, (state: RequestState) => state.loadedClosed);

const getAllEntities = createSelector(
  getRequestState,
  (item => item.entities)
);

export const getAllRequests = createSelector(
  getRequestState,
  request => Object.keys(request.entities).map(key => request.entities[key])
);

export const getMyCreatedRequests = (username: string) => createSelector(
  getAllRequests,
  (state: Request[]) => state.filter(item => item.creator.username === username && !item.closed)
);

export const getMeAssignedRequests = (username: string) => createSelector(
  getAllRequests,
  (state: Request[]) => state.filter(item => item.assigned && item.assigned.username === username && !item.closed)
);


export const getOtherRequests = (username: string) => createSelector(
  getAllRequests,
  (state: Request[]) => state.filter(
    item => !(item.assigned && item.assigned.username === username) && item.creator.username !== username && !item.closed
  )
);


export const getRequestById = createSelector(
  getAllEntities,
  routerSelector,
  (entities, router) => router.state && entities[router.state.queryParams.request_id]
);
