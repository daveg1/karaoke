import { Router } from 'express'
import { lyricsRoutes } from './lyrics.route'
import { songsRoutes } from './songs.route'

const routes = Router()

routes.use('/lyrics', lyricsRoutes)
routes.use('/songs', songsRoutes)

export { routes }
