import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	songs$;

	constructor(
		private readonly songsService: SongsService,
		readonly router: Router
	) {
		this.songs$ = this.songsService.songs$;
	}

	open(song: Song) {
		this.router.navigate(['/', song.title]);
	}
}
