import express, { Request, Response } from 'express'
const router = express.Router()
import session from 'express-session'
// var session = require('express-session')
const MessagingResponse = require('twilio').twiml.MessagingResponse;
// var bodyParser = require('body-parser')
import bodyParser from 'body-parser'

router.use(session({secret: 'anything-you-want-but-keep-secret'}));
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()
  const message = twiml.message();
  
  if (req.body.Body == 'hello') {
    message.body('Hi!')
    message.media('https://c.tenor.com/zQWHcFPU1-gAAAAC/forrest-gump.gif')
  } else if (req.body.Body == 'bye') {
    message.body('Goodbye')
    message.media('https://media0.giphy.com/media/COYGe9rZvfiaQ/200.gif')
  } else {
    message.body('I got nothing ¯\_(ツ)_/¯')
    message.media('https://c.tenor.com/oRhDoibDP0kAAAAM/barack-obama-former-us-president.gif')
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

export default router