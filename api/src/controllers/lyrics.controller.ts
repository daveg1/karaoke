import { join, resolve } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'

const lyricsDir = resolve(__dirname, '../lyrics')

export class LyricsController {
	static getLyrics(title: string): string {
		const contents = readFileSync(join(lyricsDir, `${title}.lrc`), 'utf-8')

		return contents
	}

	static updateLyrics(title: string, lyrics: string): void {
		writeFileSync(join(lyricsDir, `${title}.lrc`), lyrics, 'utf-8')
	}
}
