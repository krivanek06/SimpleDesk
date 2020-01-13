import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-forms',
  templateUrl: './request-forms.component.html',
  styleUrls: ['./request-forms.component.scss']
})
export class RequestFormsComponent implements OnInit {
  public hasFinanceModuleAccess$: Observable<boolean>;

  constructor( private authService: AuthenticationService ) { }

  ngOnInit() {
    this.hasFinanceModuleAccess$ = this.authService.hasFinanceModuleAccess();
  }

}
