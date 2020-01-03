import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImageDTO } from 'app/shared/models/ImageDTO';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss']
})
export class UserImagesComponent implements OnInit {
  @Output() changeWindow: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  public images: ImageDTO[] = [];

  constructor(private http : HttpClient, private spinner: NgxSpinnerService, private userService: UserService) { }

  ngOnInit() {
    this.loadAvailableAvatars();

  }

  private closeWindow(){
    this.changeWindow.emit(false);
  }

  private loadAvailableAvatars(): void{
    this.spinner.show();
    this.http.get<ImageDTO[]>(environment.apiUrl + "user/getImages").subscribe(images => {
      this.images = images;
      this.spinner.hide();
    });
  }

  private changeImage(image: ImageDTO) : Observable<any>{
    let params = new HttpParams().set('imageToUpdate' , image.name) ;

    return this.http.put(environment.apiUrl + "user/changeImage", null , {params: params});
  }

  private selectImage(imageDTO: ImageDTO): void{
    Swal.fire({
      title: "Potvrďte zmenu obrázku",
      html: "<img src='data:image/jpeg;base64, "+ imageDTO.imageBytes + "' style='width:350px' />",
      imageHeight: 500,
      imageAlt: 'A tall image',
      showConfirmButton: true,
      confirmButtonText: "Potvrdiť"
    }).then(result =>{
        if(result.value === true){
          this.spinner.show();
          this.changeImage(imageDTO).subscribe(res => {
              this.userService.changeUserImage(imageDTO);
              Swal.fire({ position: 'top-end', icon: 'success', title: 'Váš obrázok bol zmenený',showConfirmButton: false,timer: 1500 })
              
          })
        }
    }).finally(() => this.spinner.hide());
  }

}
