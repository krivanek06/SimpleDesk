import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { GroupService } from 'app/core/services/group.service';
import { GroupContainer, Group } from 'app/shared/models/UserGroups';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  @Output() selectedGroupEmmiter: EventEmitter<Group> = new EventEmitter<Group>();

  @Input() groupContainer: GroupContainer;
  @Input() elevationActivated: boolean = false;

  constructor(public groupService: GroupService) { }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


  getGroupDetails(groupName: string){
    if(!this.elevationActivated){
      return;
    }

    this.groupService.getGroupDetails(groupName)
      .pipe(takeUntil(this.destroy$))
      .subscribe(group => {
        this.selectedGroupEmmiter.emit(group);
      })
  }

}
