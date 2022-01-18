import express, { Request, Response } from 'express'
const router = express.Router()
const MessagingResponse = require('twilio').twiml.MessagingResponse
import bodyParser from 'body-parser'

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/", async (request: Request, response: Response) => {
  return response.status(200).json({
    message: 'API Documentation: https://github.com/alexmkio/twilio-sms-server'
  })
})

router.post('/sms', async (request: Request, response: Response) => {

  const twiml = new MessagingResponse()
  const message = twiml.message();
  
  if (request.body.Body == 'hello') {
    message.body('Hi!')
    message.media('https://c.tenor.com/zQWHcFPU1-gAAAAC/forrest-gump.gif')
  } else if (request.body.Body == 'bye') {
    message.body('Goodbye')
    message.media('https://media0.giphy.com/media/COYGe9rZvfiaQ/200.gif')
  } else {
    message.body('come again?')
    message.media('https://c.tenor.com/oRhDoibDP0kAAAAM/barack-obama-former-us-president.gif')
  }

  response.writeHead(200, { 'Content-Type': 'text/xml' })
  response.end(twiml.toString())
})

export default router