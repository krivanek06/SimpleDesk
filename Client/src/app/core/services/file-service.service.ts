import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from 'environments/environment';
import {saveAs} from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http: HttpClient) {
  }

  public postFileForRequest(id: number, filesToUpload: File[]): Observable<boolean> {
    if (filesToUpload.length === 0) {
      return of(false);
    }
    const formData: FormData = new FormData();
    for (let i = 0; i < filesToUpload.length; i++) {
      formData.append("filesToUpload", filesToUpload[i]);
    }
    return this.http.post(environment.apiUrl + `requests/requestDetails/${id}/files`, formData).pipe(map(() => {
      while (filesToUpload.length !== 0) {
        filesToUpload.pop();
      }
      return true;
    }));
  }


  public downloadFileForRequest(id: number, fileName: string) {
    const params = new HttpParams().set('fileName', fileName);
    this.http.get(environment.apiUrl + `requests/requestDetails/${id}/download`, {params: params, responseType: 'blob'})
      .subscribe(res => saveAs(res, fileName))
  }


}
