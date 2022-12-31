import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lyrics } from 'src/app/interfaces/Lyrics';
import { LyricsService } from 'src/app/services/lyrics.service';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
	lyrics?: Lyrics;
	form;

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute,
		private readonly lyricsService: LyricsService,
		private readonly formBuilder: NonNullableFormBuilder
	) {
		this.form = this.formBuilder.group({
			lyrics: '',
		});
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe((paramMap) => {
			const song = paramMap.get('song') ?? '';

			this.lyricsService.getLyrics(song).subscribe((data) => {
				this.lyrics = data;
				this.form.controls.lyrics.setValue(data.lyrics);
			});
		});
	}

	savelyrics(): void {
		if (!this.lyrics) {
			return;
		}

		this.lyricsService
			.updateLyrics(this.lyrics.title, this.form.controls.lyrics.value)
			.subscribe((_) => {
				this.back();
			});
	}

	back(): void {
		this.router.navigate(['../'], { relativeTo: this.route });
	}
}
