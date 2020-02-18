import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RequestComment, RequestCommentWrapper} from 'app/resources/request/model/interface/Request';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentHttpService {

  constructor(private http: HttpClient) {

  }

  public addComment(requestCommentWrapper: RequestCommentWrapper): Observable<RequestComment> {
    const params = new HttpParams()
      .set("sendEmail", String(requestCommentWrapper.sendEmail))
      .set("solution", String(requestCommentWrapper.solution));
    return this.http.post<RequestComment>(environment.apiUrl + `requests/comment`, requestCommentWrapper.requestComment, {params});
  }

  public editComment(requestComment: RequestComment): Observable<any> {
    return this.http.put(environment.apiUrl + `requests/comment`, requestComment);
  }

  public deleteComment(requestComment: RequestComment): Observable<any> {
    return this.http.request('delete', environment.apiUrl + `requests/comment`, {body: requestComment})
  }

  public changePrivacy(requestComment: RequestComment): Observable<any> {
    return this.http.put(environment.apiUrl + `requests/comment/privacy`, requestComment);
  }

  public shareComment(requestComment: RequestComment): Observable<any> {
    return this.http.put(environment.apiUrl + `requests/comment/share`, requestComment)
  }


}
