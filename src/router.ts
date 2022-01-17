import express, { Request, Response } from 'express'
const router = express.Router()
const MessagingResponse = require('twilio').twiml.MessagingResponse;
import { body, validationResult } from 'express-validator'
router.use(express.json())

router.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()
  twiml.message('The Robots are coming! Head for the hills!')
  res.writeHead(200, {'Content-Type': 'text/xml'})
  res.end(twiml.toString())
})

export default router