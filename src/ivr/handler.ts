const VoiceResponse = require('twilio').twiml.VoiceResponse

type Items = {
  [key: string]: Function,
}

type ItemsTwo = {
  [key: string]: string,
}

export const welcome = () => {
  const voiceResponse = new VoiceResponse()

  const gather = voiceResponse.gather({
    action: '/ivr/menu',
    numDigits: '1',
    method: 'POST',
  })

  gather.say(
    `Thanks for calling Alex Kio's telephone service. ` +
    'Please press 1 for a list of cat names. ' +
    'Press 2 for a list of dog names.' +
    'Press 3 for a list of people I love.'
  )

  return voiceResponse.toString()
}

export const menu = (digit: number) => {
  const optionActions: Items = {
    '1': listCats,
    '2': listDogs,
    '3': listPeopleILove,
    '4': hangUp
  }

  return (optionActions[digit])
    ? optionActions[digit]()
    : redirectWelcome()
}

const listCats = () => {
  const twiml = new VoiceResponse()
  twiml.say('Yoda. Silo. Tigeris.')
  twiml.say('Returning to the main menu')
  twiml.redirect('/ivr/welcome')
  return twiml.toString()
}

const listDogs = () => {
  const twiml = new VoiceResponse()
  twiml.say('Noodle bear.')
  twiml.say('Returning to the main menu')
  twiml.redirect('/ivr/welcome')
  return twiml.toString()
}

const listPeopleILove = () => {
  const twiml = new VoiceResponse()

  const gather = twiml.gather({
    action: '/ivr/numbers',
    numDigits: '1',
    method: 'POST',
  })

  gather.say('I love Ellen. To call Alex press 2.')

  return twiml.toString()
}

export const numbers = (digit: number) => {
  const optionActions: ItemsTwo = {
    '2': '+18502641927',
  }

  if (optionActions[digit]) {
    const twiml = new VoiceResponse()
    twiml.dial(optionActions[digit])
    return twiml.toString()
  }

  return redirectWelcome()
}

const redirectWelcome = () => {
  const twiml = new VoiceResponse()
  twiml.say('Returning to the main menu')
  twiml.redirect('/ivr/welcome')
  return twiml.toString()
}

const hangUp = () => {
  const twiml = new VoiceResponse()
  twiml.say('Thanks for calling. Goodbye!')
  twiml.hangup()
  return twiml.toString()
}