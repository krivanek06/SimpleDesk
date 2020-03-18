import {Action, createAction, props} from "@ngrx/store";
import {
  CustomDocument,
  FinanceForm,
  ReportForm,
  Request,
  RequestComment,
  RequestCommentWrapper,
  TicketForm
} from "../../../core/model/Request";
import {UserSimpleDTO} from "../../../core/model/User";
import {RequestPosition, RequestType} from "../../../core/enum/request.enum";


export const uploadFile = createAction(
  '[Request Detail] Upload files',
  props<{ requestId: number, fileList: FileList }>()
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
  props<{ file: string , fileName: string}>()
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
  props<{ requestCommentWrapper: RequestCommentWrapper }>()
);
export const addCommentSuccess = createAction(
  '[Request Detail] Add comment success',
  props<{ requestComment: RequestComment }>()
);
export const addCommentFailure = createAction(
  '[Request Detail] Add comment failure',
  props<{ error: Error }>()
);

export const attachCommentAsSolution = createAction(
  '[Request Detail] Attach comment as solution',
  props<{requestComment: RequestComment, request: Request}>()
);

export const attachCommentAsSolutionSuccess = createAction(
  '[Request Detail] Attach comment as solution success',
  props<{requestComment: RequestComment, request: Request}>()
);

export const attachCommentAsSolutionFailure = createAction(
  '[Request Detail] Attach comment as solution',
  props<{error: Error}>()
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
  props<{ error: Error }>())
;

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
  props<{ requestComment: RequestComment, groupName: string  }>()
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
  props<{ requestId: number, date: Date , userSimpleDTO: UserSimpleDTO }>()
);
export const reopenRequest = createAction(
  '[Request Details] Reopen request',
  props<{ requestId: number,  date: Date , userSimpleDTO: UserSimpleDTO }>()
);
export const modifiedStateRequestSuccess = createAction(
  '[Request] Modified state on request success',
  props<{ requestId: number, userSimpleDTO: UserSimpleDTO , date: Date, requestPosition: RequestPosition}>()
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
  props<{ ticketForm: TicketForm, fileList: FileList }>()
);
export const createReport = createAction(
  '[Request new] Create report',
  props<{ reportForm: ReportForm, fileList: FileList }>()
);
export const createFinance = createAction(
  '[Request new] Create finance',
  props<{ financeForm: FinanceForm, fileList: FileList }>()
);
export const createRequestSuccess = createAction(
  '[Request new] Create request success',
  props<{ request: Request }>()
);
export const createRequestFailure = createAction(
  '[Request new] Create request failure',
  props<{ error: Error }>()
);


export const changedRequestAPI = createAction(
  '[API] Changed request',
  props<{ request: Request }>()
);
export const addRandomSolver = createAction(
  '[Request Details] Assign request to somebody',
  props<{ requestId: number, userSimpleDTO: UserSimpleDTO }>()
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
  props<{ request: Partial<Request>, userSimpleDTO: UserSimpleDTO }>()
);
export const removeMeOnRequest = createAction(
  '[Dashboard Page] Remove me on request',
  props<{ request: Partial<Request>, userSimpleDTO: UserSimpleDTO }>()
);
export const modifiedSolverOnRequestSuccess = createAction(
  '[Request] Modified solver on request success',
  props<{ requestId: number, userSimpleDTO: UserSimpleDTO, requestPosition: RequestPosition}>()
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
  props<{ dateFrom: string, dateTo: string }>()
);
export const getClosedRequestsSuccess = createAction(
  '[Closed Request Page] Get closed requests success',
  props<{ requests: Request[] , dateFrom: string, dateTo: string}>()
);
export const getClosedRequestsError = createAction(
  '[Closed Request Page] Get closed requests failure',
  props<{ error: Error }>()
);

