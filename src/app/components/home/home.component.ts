import { Component } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	songs?: string[];

	constructor(private readonly songsService: SongsService) {
		this.songsService.getAllSongs().subscribe((data) => {
			this.songs = data;
		});
	}
}
