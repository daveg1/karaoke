import { Component } from '@angular/core';
import { Lyrics } from 'src/app/interfaces/Lyrics';
import { LyricsService } from 'src/app/services/lyrics.service';

@Component({
	selector: 'app-scroller',
	templateUrl: './scroller.component.html',
	styleUrls: ['./scroller.component.scss'],
})
export class ScrollerComponent {
	lyrics: Lyrics;

	constructor(private readonly lyricsService: LyricsService) {
		this.lyrics = this.lyricsService.getLyrics();
	}

	scrollToLine(lineElem: HTMLElement): void {
		lineElem.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	}
}
