import {Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';
import {GroupContainer} from "../../../core/model/Group";

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGroupsComponent implements OnInit {
  @Output() selectedGroupEmmiter: EventEmitter<string> = new EventEmitter<string>();
  @Input() groupContainer: GroupContainer;
  @Input() elevationActivated = false;

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
