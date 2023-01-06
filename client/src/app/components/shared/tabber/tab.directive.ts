import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[tab]',
})
export class TabDirective {
	@Input() tab = '';

	constructor(private readonly element: ElementRef) {
		this.hide();
	}

	// TODO use templateRef and viewContainer to show/hide elements properly
	hide() {
		this.element.nativeElement.hidden = true;
	}

	show() {
		this.element.nativeElement.hidden = false;
	}
}
