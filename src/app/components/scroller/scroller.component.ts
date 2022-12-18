import { Component } from '@angular/core';
import { mockLyrics } from 'src/app/interfaces/Lyrics.mock';

@Component({
	selector: 'app-scroller',
	templateUrl: './scroller.component.html',
	styleUrls: ['./scroller.component.scss'],
})
export class ScrollerComponent {
	lyrics = mockLyrics;

	scrollToLine(lineElem: HTMLElement): void {
		lineElem.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	}
}
