import { Component, OnInit, Output, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { PasswordContainer } from 'app/shared/models/PasswordContainer';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { User } from 'app/shared/models/UserGroups';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() addImageClick = false;
  @Input() showPasswordChange = false;
  @Input() public displayedUser: User;
  @Output() changeWindow: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor( private http : HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  private changeFrames(): void{
    this.changeWindow.emit(true);
  }

  private async changePassword(){
    const { value: formValues } = await Swal.fire({
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
    
    if (formValues) {
      this.sendPasswordToAPI(this.convertFormValuesToPasswordContainer(formValues));
    }
  }

  private convertFormValuesToPasswordContainer(formValues: string[]): PasswordContainer{
    const  passwordContainer: PasswordContainer = {oldPassword: formValues[0], newPassword1: formValues[1], newPassword2: formValues[2] };
    return passwordContainer;
  }

  private sendPasswordToAPI(password: PasswordContainer): void{
    if(password.newPassword1 !== password.newPassword2){
      Swal.fire({title: 'Heslá sa nezhodujú',text:'Požiadavka o zmenu hesla nebola odoslaná', icon: 'error'});
    }
    else if(password.newPassword1.length < 6 || password.newPassword2.length < 6){
      Swal.fire({title: 'Heslo príliž krátke', text:'Minimálna dĺžka hesla je 6 znakov, požiadavka o zmenu hesla nebola odoslaná.',  icon: 'error' });
    }else{
      this.spinner.show();
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http.put(environment.apiUrl + "user/changePassword" ,password, {headers : headers}).subscribe(result =>{
          this.spinner.hide();
          Swal.fire({ position: 'top-end', icon: 'success', title: 'Heslo bolo zmenené',  showConfirmButton: false,timer: 1500 })
      })
    }
  }

}
