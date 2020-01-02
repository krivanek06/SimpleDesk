import { Component, OnInit, Input } from '@angular/core';
import { RequestComment } from 'app/shared/models/RequestDetails';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() public requestComment:RequestComment;
  constructor() { }

  ngOnInit() {
  }

}
