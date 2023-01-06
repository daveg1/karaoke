import { json, Router } from 'express'
import { LyricsController } from '../controllers/lyrics.controller.js'

const lyricsRoutes = Router()

// TODO enforce types for req.params
// ? Maybe use ZOD?
lyricsRoutes.get('/:title', (req, res) => {
	// ? Maybe use ZOD to validate type?
	const { title } = req.params
	const lyrics = LyricsController.getLyrics(title)
	res.json({ title, lyrics })
})

lyricsRoutes.put('/:title', json(), (req, res) => {
	const { title } = req.params

	if (req.body.lyrics) {
		const { lyrics } = req.body

		try {
			LyricsController.updateLyrics(title, lyrics)
			res.status(200).json({ message: 'updated' })
		} catch (error) {
			res.status(500).json({ message: 'error updating lyrics' })
		}
	} else {
		res.status(400).json({ message: 'expected lyrics in payload' })
	}
})

export { lyricsRoutes }
