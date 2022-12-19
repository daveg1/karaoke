import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lyrics } from 'src/app/interfaces/Lyrics';
import { LyricsService } from 'src/app/services/lyrics.service';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
	lyrics?: Lyrics;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly lyricsService: LyricsService
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((paramMap) => {
			const song = paramMap.get('song') ?? '';

			this.lyricsService.getLyrics(song).subscribe((lyrics) => {
				this.lyrics = lyrics;
			});
		});
	}
}
