import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Lyrics } from '../interfaces/Lyrics';
import { mockLyrics } from '../interfaces/Lyrics.mock';

@Injectable({
	providedIn: 'root',
})
export class LyricsService {
	lyrics = new BehaviorSubject<Lyrics>(mockLyrics);
}
