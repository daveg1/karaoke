import { Router } from 'express'
import { SongsController } from '../controllers/songs.controller.js'

const songsRoutes = Router()

songsRoutes.get('/all', (_, res) => {
	try {
		const songs = SongsController.getAllSongs()
		res.json(songs)
	} catch (error) {
		res.status(500).json({ message: "couldn't get songs" })
	}
})

export { songsRoutes }
