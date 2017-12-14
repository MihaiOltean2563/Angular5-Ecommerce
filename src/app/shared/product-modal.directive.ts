import { Directive, HostListener } from '@angular/core';


@Directive({
  selector: '[ProductModalDirective]'
})
export class ProductModalDirective {

  constructor() { }
  @HostListener('click') openModal(){
    console.log('clicked');
  }
}
