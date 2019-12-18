import { Component, OnInit, ElementRef, ViewChild, HostListener, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() { 
  }

  public changeBodyComponent(path: string){
    this.router.navigate(['./' + path]);
  }

  /*@HostListener('mouseenter')
  onMouseEnter() {
    console.log(this.navigation.nativeElement)
  }

  @HostListener('mouseleave')
  onMouseLeave() {

  }*/
}
