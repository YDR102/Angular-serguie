import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyloHermanos]'
})
export class StyloHermanosDirective {

  constructor(private element: ElementRef) { 

    this.element.nativeElement.style.width = "140px"
    this.element.nativeElement.style.textAlign = "center"

  }

}
