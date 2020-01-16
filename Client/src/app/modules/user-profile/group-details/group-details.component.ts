import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Group } from 'app/shared/models/UserGroups';
import { GroupService } from 'app/core/services/group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  @Input() activeButtons: boolean = false;
  @Output() deleteGroupActivation: EventEmitter<any> = new EventEmitter<any>();
  public group: Group;
  
  constructor() { }

  ngOnInit() {
  }

  private deleteGroup(): void{
    this.deleteGroupActivation.emit();
  }

}
