import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http: HttpClient) { }

  postFileForRequest(id: number , filesToUpload: File[]): Observable<boolean> {
    if(filesToUpload.length === 0){
      return of(false);
    }
    const formData: FormData = new FormData();
    for (let i = 0; i < filesToUpload.length; i++) { 
      formData.append("filesToUpload", filesToUpload[i]);
    }
   // formData.append('filesToUpload', fileToUpload, fileToUpload.name);

    return this.http.post(environment.apiUrl + `requests/modification/${id}/files`, formData).pipe( map(() => { return true; }) );
}


}
