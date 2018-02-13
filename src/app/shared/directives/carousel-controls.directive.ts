import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCarouselControls]'
})
export class CarouselControlsDirective {

  constructor() { }

  @HostListener('click') slideIt(){
    console.log("clicked");
  }

}
