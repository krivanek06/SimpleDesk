import {Injectable} from "@angular/core";
import {RequestComment, RequestCommentWrapper} from "../model/Request";
import {User} from "../../../core/model/User";

@Injectable({
  providedIn: 'root',
})
export class RequestConstructorService {


  public constructRequestCommentWrapper(requestComment: RequestComment, sendEmail: boolean, solution: boolean): RequestCommentWrapper {
    return {requestComment, sendEmail, solution};
  }

  public constructRequestComment(comment: string, isPrivate: boolean): RequestComment {
    return {
      id: null,
      requestId: null,
      creator: undefined,
      comment,
      isPrivate,
      groupsToShare: [],
      timestamp: new Date()
    };
  }
}
