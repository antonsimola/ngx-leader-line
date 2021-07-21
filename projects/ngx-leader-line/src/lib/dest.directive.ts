import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[ldrDest]',
  exportAs: "ldrDest"
})
export class DestDirective<T> extends ElementRef<T> {

  constructor(template: ElementRef) {
    super(template.nativeElement);
  }

}
