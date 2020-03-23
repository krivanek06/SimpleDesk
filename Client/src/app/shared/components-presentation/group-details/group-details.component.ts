import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { UserSimpleDTO} from 'app/core/model/User';
import {Group} from "../../../core/model/Group";

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsComponent implements OnInit {

  private copyGroup: Group; // stores group object state when editing group

  @Input() group: Group;
  @Input() editGroupActivated = false;
  @Input() allUsers: UserSimpleDTO[];

  constructor() {
  }

  ngOnInit() {
  }


  editGroup() {
    this.editGroupActivated = !this.editGroupActivated;
    this.copyGroup = Object.assign({}, this.group);
  }

  resetGroup() {
    this.editGroupActivated = false;
    this.group = Object.assign({}, this.copyGroup);
  }

  compareUsersInSelect(c1: UserSimpleDTO, c2: UserSimpleDTO): boolean {
    return c1 && c2 ? c1.username === c2.username : c1 === c2;
  }

}
