import express, { Request, Response } from 'express'
const router = express.Router()
import { welcome, menu, planets } from './handler'

router.post('/welcome', (request: Request, response: Response) => {
  response.send(welcome())
})

router.post('/menu', (request: Request, response: Response) => {
  const digit = request.body.Digits
  return response.send(menu(digit))
})

router.post('/planets', (request: Request, response: Response) => {
  const digit = request.body.Digits
  response.send(planets(digit))
})

export default router