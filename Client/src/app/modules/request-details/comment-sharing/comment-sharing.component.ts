import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { GroupService } from 'app/core/services/group.service';
import { Group } from 'app/shared/models/UserGroups';
import { GroupDetailsComponent } from 'app/modules/user-profile/group-details/group-details.component';


@Component({
  selector: 'app-comment-sharing',
  templateUrl: './comment-sharing.component.html',
  styleUrls: ['./comment-sharing.component.scss']
})
export class CommentSharingComponent implements OnInit {
  @Output() changeWindow: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() shareWithGroup: EventEmitter<Group> = new EventEmitter<Group>();
  @ViewChild('groupDetails',  {static: false}) groupDetails: GroupDetailsComponent;
  public clickedGroup: Group;

  public memberOfGroups: string[];

  constructor(public groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getAllGroupsForUser().subscribe(groups => {
      this.memberOfGroups = groups.userInGroups;
    });
  }

  private closeWindow(){
    this.changeWindow.emit(false);
  }

  private shareWith(){
    this.shareWithGroup.emit( this.clickedGroup);
  }

  private getGroupDetails(groupName: string){
    this.groupService.getGroupDetails(groupName).subscribe(group => {
      this.groupDetails.group = group;
      this.clickedGroup = group;
    })
  }

}
