import express from 'express'
const app = express()
import session from 'express-session'
import * as dotenv from "dotenv"
dotenv.config()
import router from './router'

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1)
  app.use(session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
} else {
  app.use(session({
    secret: process.env.SESSION_SECRET as string,
    cookie: {}
  }))
}

const PORT: number = parseInt(process.env.PORT as string) || 1337

app.use(router)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

export default app