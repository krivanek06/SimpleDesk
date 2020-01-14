import { Component, OnInit, Input } from '@angular/core';
import { Group } from 'app/shared/models/UserGroups';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  public group: Group;
  
  constructor() { }

  ngOnInit() {
  }

}
