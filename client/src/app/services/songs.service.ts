import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endpoint = 'http://localhost:8080/songs/';

@Injectable({
	providedIn: 'root',
})
export class SongsService {
	constructor(private readonly http: HttpClient) {}

	getAllSongs() {
		return this.http.get<string[]>(endpoint + 'all');
	}
}
