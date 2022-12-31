import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lyrics } from 'src/app/interfaces/Lyrics';
import { LyricsService } from 'src/app/services/lyrics.service';

@Component({
	selector: 'app-viewer',
	templateUrl: './viewer.component.html',
	styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent {
	lyrics?: Lyrics;
	lines?: string[];

	constructor(
		private readonly route: ActivatedRoute,
		private readonly lyricsService: LyricsService
	) {
		this.route.params.subscribe((params) => {
			if (params['song']) {
				this.lyricsService.getLyrics(params['song']).subscribe((data) => {
					this.lyrics = data;
					this.lines = data.lyrics.trim().split('\n');
				});
			}
		});
	}

	scrollToLine(lineElem: HTMLElement): void {
		lineElem.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	}
}
