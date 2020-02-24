import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ImageDTO} from "../../../../resources/user/model/User";

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss']
})
export class UserImagesComponent implements OnInit {
  @Input() avatars: ImageDTO[];
  @Output() changeWindowEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectImageEmitter: EventEmitter<ImageDTO> = new EventEmitter<ImageDTO>();


  constructor() {
  }

  ngOnInit() {

  }

  closeWindow() {
    this.changeWindowEmitter.emit();
  }

  selectImage(imageDTO: ImageDTO): void {
    this.selectImageEmitter.emit(imageDTO);
  }

}
