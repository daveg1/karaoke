import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lyrics } from 'src/app/interfaces/Lyrics';
import { LyricsService } from 'src/app/services/lyrics.service';

@Component({
	selector: 'app-viewer',
	templateUrl: './viewer.component.html',
	styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent {
	lines?: string[];

	constructor(private readonly lyricsService: LyricsService) {
		this.lyricsService.getLyrics('Утренняя Гимнастика').subscribe((data) => {
			this.lines = data.lyrics.trim().split('\n');
		});
	}

	scrollToLine(lineElem: HTMLElement): void {
		lineElem.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	}
}
