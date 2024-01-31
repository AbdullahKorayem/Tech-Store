import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToChange]',
  standalone: true,
})
export class ToChangeDirective {
  constructor(public TheRef: ElementRef) {
    this.TheRef.nativeElement.style.transition =
      'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
    this.TheRef.nativeElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    // this.TheRef.nativeElement.style.border = '2px solid red';
  }

  @HostListener('mouseover') toHaveEffect() {
    this.TheRef.nativeElement.style.transform = 'scale(1.005)';
    this.TheRef.nativeElement.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
  }

  @HostListener('mouseleave') toHaveDisableEffect() {
    this.TheRef.nativeElement.style.transform = 'scale(1)';
    this.TheRef.nativeElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  }
}
