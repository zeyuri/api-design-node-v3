import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// dogs

router
  .route('/dog')
  .get((req, res) => {
    console.log(req)
    res.send({ name: 'deno' })
  })
  .post()

app.use(router)

app.get('/data', (req, res) => {
  res.send({ data: [1, 2, 3] })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(4200, () => {
    console.log('server is on 4:200')
  })
}
