import { Component, OnInit } from '@angular/core';
import { GroupService } from 'app/core/services/group.service';
import { GroupContainer } from 'app/shared/models/Group';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {
  groupContainer: GroupContainer;

  constructor(public groupService: GroupService) { }

  ngOnInit() {
    this.getAllGroupsForUser();
  //  this.groupService.getAllGroupsForUser().subscribe(x => console.log(x));
  }

  private getAllGroupsForUser(): void{
    if(this.groupContainer !== undefined){
      return;
    }
    this.groupService.getAllGroupsForUser().subscribe(result => this.groupContainer = result);
  }

  private getGroupDetails(groupName: string){
    this.groupService.getGroupDetails(groupName).subscribe(x => {
      console.log(x)
    })
  }

}
