import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestComment } from 'app/shared/models/RequestDetails';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentHttpService {

  constructor(private http: HttpClient) {
    
   }

  public addComment(requestComment: RequestComment, sendEmail: boolean = false, solution: boolean = false): Observable<any>{
    let params = new HttpParams().set("sendEmail", String(sendEmail)).set("solution", String(solution)) ;
    return this.http.post(environment.apiUrl + `requests/comment` ,requestComment, {params: params});
  }

  public editComment(requestComment: RequestComment): Observable<any>{
    return this.http.put(environment.apiUrl + `requests/comment` ,requestComment);
  }

  public deleteComment(requestComment: RequestComment):Observable<any>{
    return this.http.request('delete', environment.apiUrl + `requests/comment`, {body: requestComment})
  }

  public changePrivacy(requestComment: RequestComment):Observable<any>{
    return this.http.put(environment.apiUrl + `requests/comment/privacy` ,requestComment);
  }

  public shareComment(requestComment: RequestComment):Observable<any>{
    return this.http.put(environment.apiUrl + `requests/comment/share`, requestComment)
  }


}
