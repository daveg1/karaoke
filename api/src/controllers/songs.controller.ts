import { resolve } from 'node:path'
import { readdirSync } from 'node:fs'
import { currentDir } from '../helpers/directory.js'

const lyricsDir = resolve(currentDir(import.meta), '../lyrics')

export class SongsController {
	static getAllSongs(): string[] {
		const files = readdirSync(lyricsDir)

		return files.map((file) => file.replace('.lrc', ''))
	}
}
