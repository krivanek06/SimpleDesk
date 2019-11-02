import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation-background',
  templateUrl: './navigation-background.component.html',
  styleUrls: ['./navigation-background.component.scss']
})
export class NavigationBackgroundComponent implements OnInit {
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
