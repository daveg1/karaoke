import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lyrics } from 'src/app/interfaces/Lyrics';
import { LyricsService } from 'src/app/services/lyrics.service';

@Component({
	selector: 'app-infobar',
	templateUrl: './infobar.component.html',
	styleUrls: ['./infobar.component.scss'],
})
export class InfobarComponent {
	lyrics: BehaviorSubject<Lyrics>;

	constructor(private lyricsService: LyricsService) {
		this.lyrics = this.lyricsService.lyrics;
	}
}
