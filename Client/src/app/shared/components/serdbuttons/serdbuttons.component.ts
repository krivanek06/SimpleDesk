import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-serdbuttons',
  templateUrl: './serdbuttons.component.html',
  styleUrls: ['./serdbuttons.component.scss']
})
export class SERDButtonsComponent implements OnInit {
  @Output() deleteEmitter: EventEmitter<any> = new EventEmitter();
  @Output() saveEmitter: EventEmitter<any> = new EventEmitter();
  @Output() resetEmitter: EventEmitter<any> = new EventEmitter();
  @Output() editEmitter: EventEmitter<any> = new EventEmitter();

  @Input() editActivated = false;

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    this.saveEmitter.emit();
  }

  reset() {
    this.editActivated = false;
    this.resetEmitter.emit();
  }

  edit() {
    this.editActivated = true;
    this.editEmitter.emit();
  }

  delete() {
    this.deleteEmitter.emit();
  }

}
