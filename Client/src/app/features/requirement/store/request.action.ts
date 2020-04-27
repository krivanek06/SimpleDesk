import {Action, createAction, props} from "@ngrx/store";
import {
  CustomDocument, FilterRequest,
  FinanceForm, FinanceType,
  ReportForm,
  Request,
  RequestComment,
  RequestCommentWrapper, RequestStatistics,
  TicketForm, TicketSubtype
} from "../model/Request";
import {RequestPosition, RequestType} from "../model/request.enum";
import {CustomDate} from "../../../core/model/appState.model";
import {User} from "../../../core/model/User";
import {Group} from "../../../core/model/Group";


export const uploadFile = createAction(
  '[Request Detail] Upload files',
  props<{ requestId: number, customDocuments: CustomDocument[] }>()
);
export const uploadFileSuccess = createAction(
  '[Request Details] Upload files success',
  props<{ requestId: number, customDocuments: CustomDocument[] }>()
);
export const uploadFileFailure = createAction(
  '[Request Details] Upload files failure',
  props<{ error: Error }>()
);


export const downloadFiles = createAction(
  '[Request Details] Download file',
  props<{ id: number, fileName: string }>()
);
export const downloadFilesSuccess = createAction(
  '[Request Details] Download file success',
);
export const downloadFilesFailure = createAction(
  '[Request Details] Download file failure',
  props<{ error: Error }>()
);

export const toggleCommenting = createAction(
  '[Request Detail] Block commenting',
  props<{ request: Request }>()
);
export const toggleCommentingSuccess = createAction(
  '[Request Detail] Block commenting success',
  props<{ requestId: number, allowCommenting: boolean }>()
);
export const toggleCommentingFailure = createAction(
  '[Request Detail] Block commenting failure',
  props<{ error: Error }>()
);

export const addComment = createAction(
  '[Request Detail] Add comment',
  props<{ request: Request, requestCommentWrapper: RequestCommentWrapper }>()
);
export const addCommentSuccess = createAction(
  '[Request Detail] Add comment success',
  props<{ requestComment: RequestComment, solutionComment: number }>()
);
export const addCommentFailure = createAction(
  '[Request Detail] Add comment failure',
  props<{ error: Error }>()
);

export const editComment = createAction(
  '[Request Detail] Edit comment',
  props<{ requestComment: RequestComment, comment: string }>()
);
export const editCommentSuccess = createAction(
  '[Request Detail] Edit comment success',
  props<{ requestComment: RequestComment, comment: string }>()
);
export const editCommentFailure = createAction(
  '[Request Detail] Edit comment failure',
  props<{ error: Error }>()
);

export const deleteComment = createAction(
  '[Request Detail] Delete comment',
  props<{ requestComment: RequestComment }>()
);
export const deleteCommentSuccess = createAction(
  '[Request Detail] Delete comment success',
  props<{ requestComment: RequestComment }>()
);
export const deleteCommentFailure = createAction(
  '[Request Detail] Delete comment failure',
  props<{ error: Error }>()
);

export const shareComment = createAction(
  '[Request Detail] Share comment',
  props<{ requestComment: RequestComment, groupName: string }>()
);
export const shareCommentSuccess = createAction(
  '[Request Detail] Share comment success',
  props<{ requestComment: RequestComment, groupName: string }>()
);
export const shareCommentFailure = createAction(
  '[Request Detail] Share comment failure',
  props<{ error: Error }>()
);


export const changeCommentPrivacy = createAction(
  '[Request Detail] Change comment privacy',
  props<{ requestComment: RequestComment }>()
);
export const changeCommentPrivacySuccess = createAction(
  '[Request Detail] Change comment privacy success',
  props<{ requestComment: RequestComment, privacy: boolean }>()
);
export const changeCommentPrivacyFailure = createAction(
  '[Request Detail] Change comment privacy failure',
  props<{ error: Error }>()
);


export const addReportEvaluation = createAction(
  '[Request Detail] Report add evaluation',
  props<{ requestId: number, days: number }>()
);
export const addReportEvaluationSuccess = createAction(
  '[Request Detail] Report add evaluation success',
  props<{ requestId: number, days: number }>()
);
export const addReportEvaluationFailure = createAction(
  '[Request Detail] Report add evaluation failure',
  props<{ error: Error }>()
);


export const closeRequest = createAction(
  '[Request Detail] Close request',
  props<{ requestId: number, date: Date, close: boolean }>()
);
export const reopenRequest = createAction(
  '[Request Details] Reopen request',
  props<{ requestId: number, date: Date, close: boolean }>()
);
export const modifiedStateRequestSuccess = createAction(
  '[Request] Modified state on request success',
  props<{ requestId: number, userDTO: User, date: Date, requestPosition: RequestPosition }>()
);
export const modifiedStateRequestFailure = createAction(
  '[Request] Modified state on request failure',
  props<{ error: Error }>(
  ));


export const changePriority = createAction(
  '[Request Details] Change priority',
  props<{ requestId: number, priority: string }>()
);
export const changePrioritySuccess = createAction(
  '[Request Details] Change priority success',
  props<{ requestId: number, priority: string }>()
);
export const changePriorityFailure = createAction(
  '[Request Details] Change priority failure',
  props<{ error: Error }>()
);


export const createTicket = createAction(
  '[Request new] Create ticket',
  props<{ ticketForm: TicketForm, customDocuments: CustomDocument[] }>()
);
export const createReport = createAction(
  '[Request new] Create report',
  props<{ reportForm: ReportForm, customDocuments: CustomDocument[] }>()
);
export const createFinance = createAction(
  '[Request new] Create finance',
  props<{ financeForm: FinanceForm, customDocuments: CustomDocument[] }>()
);
export const createRequestSuccess = createAction(
  '[Request new] Create request success',
  props<{ request: Request, customDocuments: CustomDocument[] }>()
);
export const createRequestFailure = createAction(
  '[Request new] Create request failure',
  props<{ error: Error }>()
);

export const initializeWebsocketConnectionForRequests = createAction(
  '[Core] init websocket connection for requests'
);

export const initializeWebsocketConnectionForRequestsSuccess = createAction(
  '[Core] init websocket connection for requests success'
);

export const initializeWebsocketConnectionForRequestsFailure = createAction(
  '[Core] init websocket connection for requests failure',
  props<{ error: Error }>()
);


export const updateRequestFromAPI = createAction(
  '[API] Update request',
  props<{ request: Request }>()
);
export const deleteRequestFromAPI = createAction(
  '[API] Delete request',
  props<{ request: Request }>()
);

export const addRandomSolver = createAction(
  '[Request Details] Assign request to somebody',
  props<{ requestId: number, userSimpleDTO: User }>()
);

export const removeLogs = createAction(
  '[Dashboard Page] Remove logs',
  props<{ requestId: number }>()
);
export const removeLogsSuccess = createAction(
  '[Dashboard Page] Remove logs success',
  props<{ requestId: number }>()
);
export const removeLogsFailure = createAction(
  '[Dashboard Page] Remove logs failure',
  props<{ error: Error }>()
);


export const assignMeOnRequest = createAction(
  '[Dashboard Page] Assign me on request',
  props<{ request: Partial<Request>, assign: boolean }>()
);
export const removeMeOnRequest = createAction(
  '[Dashboard Page] Remove me on request',
  props<{ request: Partial<Request>, assign: boolean }>()
);
export const modifiedSolverOnRequestSuccess = createAction(
  '[Request] Modified solver on request success',
  props<{ requestId: number, userSimpleDTO: User, requestPosition: RequestPosition }>()
);
export const modifiedSolverOnRequestFailure = createAction(
  '[Request] Modified solver on request failure',
  props<{ error: Error }>()
);


export const getOpenRequests = createAction(
  '[Dashboard Page] Get requests'
);
export const getOpenRequestsSuccess = createAction(
  '[Dashboard Page] Get requests success',
  props<{ requests: Request[] }>()
);
export const getOpenRequestsError = createAction(
  '[Dashboard Page] Get requests failure',
  props<{ error: Error }>()
);

export const getClosedRequests = createAction(
  '[Closed Request Page] Get closed requests',
  props<{ customDate: CustomDate }>()
);
export const getClosedRequestsSuccess = createAction(
  '[Closed Request Page] Get closed requests success',
  props<{ requests: Request[], customDate: CustomDate }>()
);
export const getClosedRequestsError = createAction(
  '[Closed Request Page] Get closed requests failure',
  props<{ error: Error }>()
);

export const changeClosedRequestFilter = createAction(
  '[Closed Request Page] Change closed request filter',
  props<{ filterRequests: FilterRequest }>()
);


export const getTicketSubtypes = createAction(
  '[Request] get ticket subtypes',
);

export const getTicketSubtypesSuccess = createAction(
  '[Request] get ticket subtypes success',
  props<{ ticketSubtype: TicketSubtype[] }>()
);

export const getTicketSubtypesError = createAction(
  '[Request] get ticket subtypes error',
  props<{ error: Error }>()
);


export const getFinanceTypes = createAction(
  '[Request] get finance types',
);

export const getFinanceTypesSuccess = createAction(
  '[Request] get finance types success',
  props<{ financeType: FinanceType[] }>()
);

export const getFinanceTypesError = createAction(
  '[Request] get finance types error',
  props<{ error: Error }>()
);

export const getGroupToShare = createAction(
  '[Request] get group to share',
  props<{ groupName: string }>()
);

export const getGroupToShareSuccess = createAction(
  '[Request] get group to share success',
  props<{ group: Group }>()
);

export const getGroupToShareError = createAction(
  '[Request] get group to share failure',
  props<{ error: Error }>()
);



