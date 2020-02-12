import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { GroupHttpService } from 'app/api/group-http.service';
import { Group, GroupContainer } from 'app/shared/models/UserGroups';
import { GroupDetailsComponent } from 'app/resources/group/view/group-details/group-details.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-request-comment-sharing',
  templateUrl: './request-comment-sharing.component.html',
  styleUrls: ['./request-comment-sharing.component.scss']
})
export class RequestCommentSharingComponent implements OnInit {
  @Output() changeWindow: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() shareWithGroup: EventEmitter<Group> = new EventEmitter<Group>();
  @ViewChild('groupDetails',  {static: false}) groupDetails: GroupDetailsComponent;
  public clickedGroup: Group;

  public involvedInGroups$: Observable<string[]>;

  constructor(public groupService: GroupHttpService) { }

  ngOnInit() {
    this.involvedInGroups$ =  this.groupService.getAllGroupNamesForUser();
  }

  closeWindow(){
    this.changeWindow.emit(false);
  }

  shareWith(){
    this.shareWithGroup.emit( this.clickedGroup);
  }

  public getGroupDetails(groupName: string){
    this.groupService.getGroupDetails(groupName).subscribe(group => {
      this.groupDetails.group = group;
      this.clickedGroup = group;
    })
  }

}
