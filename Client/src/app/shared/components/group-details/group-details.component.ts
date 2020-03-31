import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Group} from "../../../core/model/Group";
import {User, UserSimple} from "../../../core/model/User";

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsComponent implements OnInit {
  @Input() groupCopy: Group;
  @Input() readonly groupOrig: Group;
  @Input() editGroupActivated = false;
  @Input() allUsers: UserSimple[];

  constructor() {
  }

  ngOnInit() {
  }

  edit() {
    this.groupCopy = JSON.parse(JSON.stringify(this.groupOrig));
  }

  compareUsersInSelect(c1: User, c2: User): boolean {
    return c1 && c2 ? c1.username === c2.username : c1 === c2;
  }

}
