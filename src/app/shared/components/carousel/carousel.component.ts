import { Component, OnInit, Renderer2, AfterViewInit, QueryList, ContentChildren, ElementRef, ViewChildren, ViewChild, Input, Directive } from '@angular/core';
import { CarouselItemDirective } from 'shared/directives/carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}
export interface Slide {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})


export class CarouselComponent implements OnInit{
   
  items: Array<string> = ['first', 'second', 'third'];
  activeItem: string = this.items[0];

  slides: Array<any> = [
    { title: 'one', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/1024px-Bananas.jpg'},
    { title: 'two', imageUrl: 'http://www.publicdomainpictures.net/pictures/10000/velka/1-125673986011mL.jpg'},
    { title: 'three', imageUrl: 'https://i1.wp.com/redalertlive.com/wp-content/uploads/2012/02/bubble-gum-600x395.jpg'}
  ]

  activeSlide = this.slides[0];

  ngOnInit(){
    console.log("currentIndex: ", this.items.indexOf(this.activeItem));
  }
  
  prev() {
    const currentIndex = this.slides.indexOf(this.activeSlide);
    const newIndex = currentIndex === 0 ? this.slides.length - 1 : currentIndex - 1;
    this.activeSlide = this.slides[newIndex];
}

  next() {
    const currentIndex = this.slides.indexOf(this.activeSlide);
    const newIndex = currentIndex === this.slides.length - 1 ? 0 : currentIndex + 1;
    this.activeSlide = this.slides[newIndex];
  }

}
