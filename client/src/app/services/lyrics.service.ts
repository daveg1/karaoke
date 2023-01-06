import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lyrics } from '../interfaces/Lyrics';
import { mockLyrics } from '../interfaces/Lyrics.mock';

const headers = new HttpHeaders({
	'Content-Type': 'application/json',
});

const endpoint = 'http://localhost:8080/lyrics/';

@Injectable({
	providedIn: 'root',
})
export class LyricsService {
	lyrics = new BehaviorSubject<Lyrics>(mockLyrics);

	constructor(private http: HttpClient) {}

	getLyrics(title: string) {
		return this.http.get<Lyrics>(endpoint + title);
	}

	updateLyrics(title: string, lyrics: string) {
		return this.http.put<Lyrics>(endpoint + title, { lyrics }, { headers });
	}
}
