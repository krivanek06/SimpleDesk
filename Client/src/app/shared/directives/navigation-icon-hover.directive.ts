import { Directive, ElementRef, Renderer, HostListener, HostBinding, Renderer2 } from '@angular/core';
import { AnimationBuilder, AnimationMetadata, style, animate, AnimationPlayer } from '@angular/animations';

@Directive({
  selector: '[appNavigationIconHover]'
})
export class NavigationIconHoverDirective {
  navigationBackground: any; // nativeElement of navigation background

  @HostBinding('class.navigationIcon')private ishovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2, private builder: AnimationBuilder) {
    this.navigationBackground = this.el.nativeElement.parentElement.parentElement.querySelector("#navigationBackground");
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



  private applyAnimation(){

    const metadataPlayer = this.ishovering ? this.fade(80,80) : this.fade(45, 45);
    const metadataPlayerParent = this.ishovering ? this.fadeNavigationContainer(130) : this.fadeNavigationContainer(85);
                                        
    const player = this.builder.build(metadataPlayer).create(this.el.nativeElement);
    const playerParent = this.builder.build(metadataPlayerParent).create(this.navigationBackground);
    
    player.play();
    playerParent.play();
  }

  private fadeNavigationContainer(newWidth: number): AnimationMetadata[] {
    return [
      style({ opacity: 1 }),
      animate('400ms ease-in', style({ 
        opacity: 1 ,
        width: newWidth
      })),
    ];
  }


  private fade(newHeight: number, newWidth: number): AnimationMetadata[] {
    return [
      style({ opacity: 1 }),
      animate('400ms ease-in', style({ 
        height : newHeight,
        width: newWidth,
        
      })),
    ];
  }

}
