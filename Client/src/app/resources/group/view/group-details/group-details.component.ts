import { Component, OnInit} from '@angular/core';
import { Group, UserSimpleDTO } from 'app/shared/models/UserGroups';
import { Observable } from 'rxjs';
import { UserHttpService } from 'app/api/user-http.service';
@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  
  private copyGroup: Group; // stores group object state when editing group
  public group: Group;
  public editGroupActivated: boolean = false;
  
  allUsers$: Observable<UserSimpleDTO[]>;

  constructor(private userHttp: UserHttpService) {
    this.allUsers$ = this.userHttp.getAllActiveUsers();
  }

  ngOnInit() {
  }


  public editGroup(){   
    this.editGroupActivated = !this.editGroupActivated;
    this.copyGroup = Object.assign({}, this.group)
  }

  public resetGroup(){
    this.editGroupActivated = false;
    this.group = Object.assign({}, this.copyGroup)
  }

  compareUsersInSelect(c1: UserSimpleDTO, c2: UserSimpleDTO): boolean {
    return c1 && c2 ? c1.username === c2.username : c1 === c2;
  }

}
