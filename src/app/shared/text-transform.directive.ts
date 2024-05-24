import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextTransform]'
})
export class TextTransformDirective implements OnInit {
  @Input('appTextTransform') transformType: 'uppercase' | 'lowercase' = 'uppercase';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.transformText(this.transformType);
  }

  private transformText(type: 'uppercase' | 'lowercase'): void {
    this.el.nativeElement.style.textTransform = type;
  }
}
