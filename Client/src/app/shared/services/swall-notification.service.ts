import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwallNotificationService {

  constructor() { }

  public generateNotification(text: string): void{
    Swal.fire({ 
        position: 'top-end', 
        text: text, 
        showConfirmButton: false, 
        timer: 1500 
    });
  }

  public generateQuestion(text: string): Promise<SweetAlertResult>{
    return Swal.fire({ 
        text: text, 
        icon: 'warning', 
        showCancelButton: true,
        confirmButtonColor: '#3085d6',  
        cancelButtonColor: '#d33',  
        cancelButtonText: "Zrušiť",  
        confirmButtonText: 'Ano'
    });
  }

  public generateErrorNotification( text: string): Promise<SweetAlertResult>{
    return Swal.fire({ text:text , icon: 'error'});
  }

  public generateDeleteQuestion(title: string , text: string): Promise<SweetAlertResult> {
    return  Swal.fire({
      title: `Naozaj chcete zmazať ${title} ?`,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'rgb(40, 171, 22)',
      cancelButtonText: "Zatvoriť",
      confirmButtonText: 'Zmazať',
    })
  }

  public editComment(comment: string): Promise<SweetAlertResult> {
    return Swal.fire({
      html:
        '<label for="commentText">Zmente komentár a potvrdte</label>' +
        '<textarea id="commentText" class="swal2-input" style = "height: 200px;">' + 
          comment +
        '</textarea>' ,
      focusConfirm: false,
      width: 750,
      preConfirm: () => { return [(<HTMLInputElement>document.getElementById('commentText')).value]}
    })
  }

  public selectImage(bytes: string): Promise<SweetAlertResult> {
    return Swal.fire({
      title: "Potvrďte zmenu obrázku",
      html: `<img src='data:image/jpeg;base64, ${bytes}' style='width:350px' />`,
      imageHeight: 500,
      imageAlt: 'A tall image',
      showConfirmButton: true,
      confirmButtonText: "Potvrdiť"
    });
  }

  public changePassword(): Promise<SweetAlertResult> {
    return Swal.fire({
      title: 'Zmena hesla',
      html:
        '<label for="old_pwd">Staré heslo</label> <input id="old_pwd" type = "password" class="swal2-input">' +
        '<label for="new_pwd1">nové heslo</label><input id="new_pwd1" type = "password"  class="swal2-input">' +
        '<label for="new_pwd2">nové heslo znovu</label><input id="new_pwd2" type = "password"  class="swal2-input">' ,
      focusConfirm: false,
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('old_pwd')).value,
          (<HTMLInputElement>document.getElementById('new_pwd1')).value,
          (<HTMLInputElement>document.getElementById('new_pwd2')).value
        ]
      }
    });
  }


}
