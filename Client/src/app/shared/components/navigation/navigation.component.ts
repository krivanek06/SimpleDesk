import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild("navigation", {read: ElementRef , static: false}) navigation: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log(this.navigation.nativeElement)
  }

  @HostListener('mouseleave')
  onMouseLeave() {

  }

}
