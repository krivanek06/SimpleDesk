import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserSimpleDTO} from 'app/core/model/User';
import {GroupFormComponent} from 'app/pages/app-management/presentation/group/group-form/group-form.component';
import {GroupHttpService} from 'app/api/group-http.service';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {FinanceHttpService} from "../../../../api/finance-http.service";
import {UserHttpService} from "../../../../api/user-http.service";
import {TicketHttpService} from "../../../../api/ticket-http.service";
import {Group} from "../../../../core/model/Group";
import {FinanceType, TicketType} from "../../../../core/model/Request";

@Component({
  selector: 'app-group-registration',
  templateUrl: './group-registration.component.html',
  styleUrls: ['./group-registration.component.scss']
})
export class GroupRegistrationComponent implements OnInit {

  allAvailableUsers: UserSimpleDTO[] = [];
  financeTypes: FinanceType[] = [];
  softwares: TicketType[];
  hardwares: TicketType[];
  servers: TicketType[];

  @ViewChild('groupForm') groupForm: GroupFormComponent;

  constructor(
    private groupHttp: GroupHttpService,
    private swallNotification: SwallNotificationService,
    private financeHttpService: FinanceHttpService,
    private userHttp: UserHttpService,
    private ticketHttpService: TicketHttpService) {
  }

  ngOnInit() {
    this.userHttp.getAllActiveUsers().subscribe(users => this.allAvailableUsers = users);
    this.financeHttpService.getFinanceTypesAll().subscribe(types => this.financeTypes = types);
    this.ticketHttpService.getTicketSubtype("Software").subscribe(x => this.softwares = x);
    this.ticketHttpService.getTicketSubtype("Hardware").subscribe(x => this.hardwares = x);
    this.ticketHttpService.getTicketSubtype("Server").subscribe(x => this.servers = x);


  }

  registerGroup(group: Group): void {
    this.swallNotification.generateQuestion(`Naozaj chcetete vytvoriť skupinu ?`).then((res) => {
      if (res.value) {
        this.swallNotification.generateNotification(`Žiadosť o vytvorenie skupiny bolo zaslané`);
        this.groupHttp.registerGroup(group).subscribe(() => {
          this.groupForm.resetForm();
          this.swallNotification.generateNotification(`Skupina ${group.name} bola vytvorená`);
        });
      }
    });

  }

}
