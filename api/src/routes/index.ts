import { Router } from 'express'
import { lyricsRoutes } from './lyrics.route.js'
import { songsRoutes } from './songs.route.js'

const routes = Router()

routes.use('/lyrics', lyricsRoutes)
routes.use('/songs', songsRoutes)

export { routes }
