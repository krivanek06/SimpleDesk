import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ImageDTO } from 'app/shared/models/ImageDTO';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss']
})
export class UserImagesComponent implements OnInit {
  @Input() avatars: ImageDTO[];
  @Output() changeWindowEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectImageEmitter: EventEmitter<ImageDTO> = new EventEmitter<ImageDTO>();
  

  constructor(private swallNotification: SwallNotificationService) { }

  ngOnInit() {

  }

  closeWindow(){
    this.changeWindowEmitter.emit();
  }

  selectImage(imageDTO: ImageDTO): void{
    this.swallNotification.selectImage(imageDTO.imageBytes).then(result =>{
        if(result.value === true){
          this.selectImageEmitter.emit(imageDTO);
        }
    });
  }

}
