import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ImageDTO} from "../../../../../../core/model/User";

@Component({
  selector: 'app-image-presentation',
  templateUrl: './image-presentation.component.html',
  styleUrls: ['./image-presentation.component.scss']
})
export class ImagePresentationComponent implements OnInit {
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
