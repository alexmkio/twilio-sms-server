import express, { Request, Response } from 'express'
const router = express.Router()
import twilio from 'twilio'
const MessagingResponse = require('twilio').twiml.MessagingResponse
import bodyParser from 'body-parser'
import ivrRouter from './ivr/router'

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/", async (request: Request, response: Response) => {
  return response.status(200).json({
    message: 'API Documentation: https://github.com/alexmkio/twilio-sms-server'
  })
})

router.post('/sms', async (request: Request, response: Response) => {
  const twiml = new MessagingResponse()
  const message = twiml.message()

  const { body } = request
  const { NumMedia } = body

  if (NumMedia) {
    for (var i = 0; i < NumMedia; i++) {
      message.body('Back at cha.')
      message.media(body[`MediaUrl${i}`])
    }
  }

  if (request.body.Body == 'hello') {
    message.body('Hi!')
    message.media('https://c.tenor.com/zQWHcFPU1-gAAAAC/forrest-gump.gif')
  } else if (request.body.Body == 'bye') {
    message.body('Goodbye')
    message.media('https://media0.giphy.com/media/COYGe9rZvfiaQ/200.gif')
  } else if (request.body.Body.length) {
    message.body('Come again?')
    message.media('https://c.tenor.com/oRhDoibDP0kAAAAM/barack-obama-former-us-president.gif')
  }

  response.writeHead(200, { 'Content-Type': 'text/xml' })
  response.end(twiml.toString())
})

router.use('/ivr', twilio.webhook({validate: false}), ivrRouter);

export default router