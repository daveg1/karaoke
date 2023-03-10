import express from 'express'
import cors from 'cors'
import { routes } from './routes/index'

const app = express()

app.use(cors())
app.use('/', routes)

app.listen(8080, () => {
	console.log(`Live at http://localhost:${8080}`)
})
