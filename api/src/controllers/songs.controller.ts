import { join, resolve } from 'node:path'
import { readdirSync, readFileSync } from 'node:fs'
import type { Song } from '../types/Song'

const lyricsDir = resolve(__dirname, '../lyrics')

export class SongsController {
	static getAllSongNames(): string[] {
		const files = readdirSync(lyricsDir)

		return files.map((file) => file.replace('.lrc', ''))
	}

	static getSong(title: string): Song {
		// TODO write LRC parser
		const lyrics = readFileSync(join(lyricsDir, `${title}.lrc`), 'utf-8')

		return {
			title,
			artist: '<blank>',
			lyrics,
		}
	}
}
