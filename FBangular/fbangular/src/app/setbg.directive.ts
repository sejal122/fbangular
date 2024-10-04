import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetbg]',
  standalone: true
})
export class SetbgDirective {

  constructor(private htmlelement:ElementRef) { 
    this.htmlelement.nativeElement.style.backgroundColor='blue';
    this.htmlelement.nativeElement.style.color='white'
  }

}
