import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lyrics } from 'src/app/interfaces/Lyrics';
import { LyricsService } from 'src/app/services/lyrics.service';

@Component({
	selector: 'app-scroller',
	templateUrl: './scroller.component.html',
	styleUrls: ['./scroller.component.scss'],
})
export class ScrollerComponent {
	lyrics: BehaviorSubject<Lyrics>;

	constructor(private readonly lyricsService: LyricsService) {
		this.lyrics = this.lyricsService.lyrics;
	}

	scrollToLine(lineElem: HTMLElement): void {
		lineElem.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	}
}
