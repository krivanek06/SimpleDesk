import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-serdbuttons',
  templateUrl: './serdbuttons.component.html',
  styleUrls: ['./serdbuttons.component.scss']
})
export class SERDButtonsComponent implements OnInit {
  @Output() deleteEmittter: EventEmitter<any> = new EventEmitter();
  @Output() saveEmittter: EventEmitter<any> = new EventEmitter();
  @Output() resetEmittter: EventEmitter<any> = new EventEmitter();
  @Output() editEmittter: EventEmitter<any> = new EventEmitter();

  public editActivated: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  save(){
    this.saveEmittter.emit();
  }

  reset(){
    this.editActivated = false;
    this.resetEmittter.emit();
  }

  edit(){
    this.editActivated = true;
    this.editEmittter.emit();
  }

  delete(){
    this.deleteEmittter.emit();
  }

}
