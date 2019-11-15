import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  constructor(elem: ElementRef) {
    console.log(elem.nativeElement);
    elem.nativeElement.style.textDecoration = 'underline';
    elem.nativeElement.style.fontSize = '20px';
  }

}
