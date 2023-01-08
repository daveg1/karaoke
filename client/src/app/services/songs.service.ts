import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const endpoint = 'http://localhost:8080/songs/';

@Injectable({
	providedIn: 'root',
})
export class SongsService {
	songs$ = new BehaviorSubject<Song[]>([]);

	constructor(private readonly http: HttpClient) {
		this.http.get<Song[]>(endpoint + 'all').subscribe((data) => {
			console.log('fetching songs');
			this.songs$.next(data);
		});
	}
}
