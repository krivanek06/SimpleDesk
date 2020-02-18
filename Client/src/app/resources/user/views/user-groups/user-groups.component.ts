import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {GroupContainer} from "../../../group/model/Group";

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {
  @Output() selectedGroupEmmiter: EventEmitter<string> = new EventEmitter<string>();
  @Input() groupContainer: GroupContainer;
  @Input() elevationActivated: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  getGroupDetails(groupName: string) {
    if (!this.elevationActivated) {
      return;
    }

    this.selectedGroupEmmiter.emit(groupName);
  }

}
