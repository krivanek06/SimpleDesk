import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-user-management-buttons',
  templateUrl: './user-management-buttons.component.html',
  styleUrls: ['./user-management-buttons.component.scss']
})
export class UserManagementButtonsComponent implements OnInit {
  @Input() isActive: boolean;
  @Output() modifyStateEmitter: EventEmitter<any> = new EventEmitter();
  @Output() reserPasswordEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  reserPassword(): void {
    return this.reserPasswordEmitter.emit();
  }

  modifyState(): void {
    return this.modifyStateEmitter.emit();
  }

}
