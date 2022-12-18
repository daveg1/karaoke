import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
	editButtonText = 'Edit lyrics';

	constructor(
		private readonly lyricsService: LyricsService,
		private readonly router: Router
	) {
		this.lyrics = this.lyricsService.lyrics;
	}

	toggleEditor(): void {
		if (this.router.url === '/') {
			this.router.navigate(['edit']);
			this.editButtonText = 'Save';
		} else {
			this.router.navigate(['']);
			this.editButtonText = 'Edit lyrics';
		}
	}
}
