import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-management-buttons',
  templateUrl: './user-management-buttons.component.html',
  styleUrls: ['./user-management-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserManagementButtonsComponent implements OnInit {
  @Input() isActive: boolean;
  @Output() modifyStateEmitter: EventEmitter<any> = new EventEmitter();
  @Output() resetPasswordEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  resetPassword(): void {
    return this.resetPasswordEmitter.emit();
  }

  modifyState(): void {
    return this.modifyStateEmitter.emit();
  }

}
