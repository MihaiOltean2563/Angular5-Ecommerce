import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[carouselItem]'
})
export class CarouselItemDirective{

  constructor(private tpl: TemplateRef<any>) { }

}
