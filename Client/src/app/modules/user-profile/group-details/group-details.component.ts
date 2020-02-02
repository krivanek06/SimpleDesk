import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Group, UserSimpleDTO } from 'app/shared/models/UserGroups';
import { GroupService } from 'app/core/services/group.service';
import { Observable } from 'rxjs';
import { UserService } from 'app/core/services/user.service';
@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  public group: Group;
  private copyGroup: Group; // stores group object state when editing group
  public editGroupActivated: boolean = false;
  
  public allUsers$: Observable<UserSimpleDTO[]>;

  constructor(private userService: UserService) {
    this.allUsers$ = this.userService.getAllActiveUsers();
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
