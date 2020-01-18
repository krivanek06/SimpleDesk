import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  private save(){
    this.saveEmittter.emit();
  }

  private reset(){
    this.editActivated = false;
    this.resetEmittter.emit();
  }

  private edit(){
    this.editActivated = true;
    this.editEmittter.emit();
  }

  private delete(){
    this.deleteEmittter.emit();
  }

}
