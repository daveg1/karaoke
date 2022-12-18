import { Injectable } from '@angular/core';
import { Lyrics } from '../interfaces/Lyrics';
import { mockLyrics } from '../interfaces/Lyrics.mock';

@Injectable({
	providedIn: 'root',
})
export class LyricsService {
	getLyrics(): Lyrics {
		return mockLyrics;
	}
}
