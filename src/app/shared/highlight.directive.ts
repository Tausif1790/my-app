import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlightColor: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.highlight(this.highlightColor || 'yellow');
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
