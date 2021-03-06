import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective  {

@Input() color;
  constructor(private el:ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
    this.renderer.addClass(this.el.nativeElement,'mat-elevation-z8');
    this.el.nativeElement.style.color = 'black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.renderer.removeClass(this.el.nativeElement,'mat-elevation-z8');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;

  }

}
