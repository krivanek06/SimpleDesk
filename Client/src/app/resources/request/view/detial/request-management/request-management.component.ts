import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestDetails, UserSimple } from 'app/shared/models/RequestDetails';
import { UserSimpleDTO } from 'app/shared/models/UserGroups';
@Component({
  selector: 'app-request-management',
  templateUrl: './request-management.component.html',
  styleUrls: ['./request-management.component.scss']
})
export class RequestManagementComponent implements OnInit {
  private priority: string;
  private solver: UserSimple;
  private reportEvaluation: number;
  
  @Input() enableChangeState: boolean;  // open or close
  @Input() enableCommenting: boolean;
  @Input() enableRemoveSolver: boolean;
  @Input() enableChangeSolver: boolean;
  @Input() enableChangePriority: boolean;
  @Input() enableEvaluation: boolean;

  @Input() availableUsers: UserSimpleDTO[];
  @Input() requestDetails: RequestDetails;


  @Output() changeStateEmitter: EventEmitter<any> = new EventEmitter();  // open or close
  @Output() commentingEmitter: EventEmitter<any> = new EventEmitter();
  @Output() removeSolverEmitter: EventEmitter<any> = new EventEmitter();
  @Output() changeSolverEmitter: EventEmitter<UserSimple> = new EventEmitter();
  @Output() changePriorityEmitter: EventEmitter<string> = new EventEmitter();
  @Output() evaluationEmitter: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  changeState(){
    this.changeStateEmitter.emit();
  }

  changeCommenting(){
    this.commentingEmitter.emit();
  }
  removeSolver(){
    this.removeSolverEmitter.emit();
  }
  changeSolver(){
    if(this.solver){
      this.changeSolverEmitter.emit(this.solver);
    }
  }
  saveSolver(userSimpleDTO: UserSimple){
    this.solver = userSimpleDTO;
  }
  
  addEvaluation(){
    if(this.reportEvaluation){
      this.evaluationEmitter.emit(this.reportEvaluation);
      this.reportEvaluation = undefined;
    }
  }
  saveEvaluation(days: number){
    this.reportEvaluation = days;
  }

  changePriority(){
    if(this.priority){
      this.changePriorityEmitter.emit(this.priority);
    }
  }
  savePriority(priority: string){
    this.priority = priority;
  }


}
