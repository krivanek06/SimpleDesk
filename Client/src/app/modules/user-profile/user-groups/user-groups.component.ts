import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GroupService } from 'app/core/services/group.service';
import { GroupContainer, Group } from 'app/shared/models/UserGroups';


@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {
  @Output() selectedGroupEmmiter: EventEmitter<Group> = new EventEmitter<Group>();

  groupContainer: GroupContainer;

  constructor(public groupService: GroupService) { }

  ngOnInit() {
    this.getAllGroupsForUser();
  }

  private getAllGroupsForUser(): void{
    if(this.groupContainer !== undefined){
      return;
    }
    this.groupService.getAllGroupsForUser().subscribe(result => this.groupContainer = result);
  }

  private getGroupDetails(groupName: string){
    this.groupService.getGroupDetails(groupName).subscribe(group => {
      this.selectedGroupEmmiter.emit(group);
    })
  }

}
