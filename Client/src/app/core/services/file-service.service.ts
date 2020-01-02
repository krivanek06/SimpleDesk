import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { saveAs } from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http: HttpClient) { }

  public postFileForRequest(id: number , filesToUpload: File[]): Observable<boolean> {
    if(filesToUpload.length === 0){
      return of(false);
    }
    const formData: FormData = new FormData();
    for (let i = 0; i < filesToUpload.length; i++) { 
      formData.append("filesToUpload", filesToUpload[i]);
    }
    return this.http.post(environment.apiUrl + `requests/modification/${id}/files`, formData).pipe( map(() => { return true; }) );
  }
  
  
  public downloadFileForRequest(id:number, fileName: string){
    let params = new HttpParams().set('fileName' , fileName) ;
    this.http.get(environment.apiUrl + `requests/requestDetails/${id}/download` , 
        {params: params, responseType:'blob'})
            .subscribe(res =>  saveAs(res, fileName))
  }


}
