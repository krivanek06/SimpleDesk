import {Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';
import {AnimationBuilder, AnimationMetadata, style, animate, AnimationPlayer} from '@angular/animations';

@Directive({
  selector: '[appNavigationIconHover]'
})
export class NavigationIconHoverDirective {
  navigationBackground: any; // nativeElement of navigation background
  contentContainer: any; // nativeElement of navigation background

  @HostBinding('class.navigationIcon') private ishovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2, private builder: AnimationBuilder) {
    this.navigationBackground = this.el.nativeElement.parentElement.parentElement.querySelector("#navigationBackground");
    this.contentContainer = this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.querySelector("#contentContainer");
  }

  @HostListener('mouseover') onMouseOver() {
    this.ishovering = true;
    // this.renderer.setStyle(this.el.nativeElement.parentElement, 'background', 'skyblue');
    this.applyAnimation();
  }

  @HostListener('mouseout') onMouseOut() {
    this.ishovering = false;
    this.applyAnimation();
  }


  private applyAnimation() {

    //  const metadataPlayer = this.ishovering ? this.fade(55,55) : this.fade(40, 40);
    const metadataPlayerParent = this.ishovering ? this.fadeNavigationContainer(85) : this.fadeNavigationContainer(75);
    // const metadataPlayerContent = this.ishovering ? this.fadeOutContent() : this.fadeInContent();

    // const playerParentContent  = this.builder.build(metadataPlayerContent).create(this.contentContainer);
    const playerParent = this.builder.build(metadataPlayerParent).create(this.navigationBackground);
    // const player = this.builder.build(metadataPlayer).create(this.el.nativeElement);


    //  player.play();
    playerParent.play();
    // playerParentContent.play();
  }

  private fadeNavigationContainer(newWidth: number): AnimationMetadata[] {
    return [
      style({opacity: 1}),
      animate('300ms ease-in', style({
        opacity: 1,
        width: newWidth
      })),
    ];
  }


  private fade(newHeight: number, newWidth: number): AnimationMetadata[] {
    return [
      style({opacity: 1}),
      animate('500ms ease-in', style({
        height: newHeight,
        width: newWidth,

      })),
    ];
  }

  private fadeOutContent(): AnimationMetadata[] {
    return [
      style({opacity: 0.15})
    ];
  }

  private fadeInContent(): AnimationMetadata[] {
    return [
      style({opacity: 1})
    ];
  }

}
