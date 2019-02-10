import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() {
  }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
