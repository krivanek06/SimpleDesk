import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UserSimpleDTO} from 'app/core/model/User';

@Component({
  selector: 'app-request-management',
  templateUrl: './request-management.component.html',
  styleUrls: ['./request-management.component.scss']
})
export class RequestManagementComponent implements OnInit {
  private priority: string;
  private solver: UserSimpleDTO;
  private reportEvaluation: number;

  @Input() enableChangeState: boolean;  // open or close
  @Input() enableChangeCommenting: boolean;
  @Input() enableRemoveSolver: boolean;
  @Input() enableChangeSolver: boolean;
  @Input() enableChangePriority: boolean;
  @Input() enableEvaluation: boolean;

  @Input() availableUsers: UserSimpleDTO[];
  @Input() isOpen: boolean;
  @Input() allowCommenting: boolean;


  @Output() changeStateEmitter: EventEmitter<any> = new EventEmitter();  // open or close
  @Output() commentingEmitter: EventEmitter<any> = new EventEmitter();
  @Output() removeMeOnRequestEmitter: EventEmitter<any> = new EventEmitter();
  @Output() changeSolverEmitter: EventEmitter<UserSimpleDTO> = new EventEmitter();
  @Output() changePriorityEmitter: EventEmitter<string> = new EventEmitter();
  @Output() evaluationEmitter: EventEmitter<number> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  changeState() {
    this.changeStateEmitter.emit();
  }

  changeCommenting() {
    this.commentingEmitter.emit();
  }

  removeMeOnRequest() {
    this.removeMeOnRequestEmitter.emit();
  }

  changeSolver() {
    if (this.solver) {
      this.changeSolverEmitter.emit(this.solver);
    }
  }

  saveSolver(userSimpleDTO: UserSimpleDTO) {
    this.solver = userSimpleDTO;
  }

  addEvaluation() {
    if (this.reportEvaluation) {
      this.evaluationEmitter.emit(this.reportEvaluation);
      this.reportEvaluation = undefined;
    }
  }

  saveEvaluation(days: number) {
    this.reportEvaluation = days;
  }

  changePriority() {
    if (this.priority) {
      this.changePriorityEmitter.emit(this.priority);
    }
  }

  savePriority(priority: string) {
    this.priority = priority;
  }


}
