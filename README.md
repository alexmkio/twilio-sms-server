# Twilio SMS Server
The purpose of this application is to develop a greater understanding of the different products the [Twilio](https://www.twilio.com/) team has built.

The server is deployed on Heroku [here](https://ak-twilio-sms-server.herokuapp.com/).

## Features
* Sending an SMS of "hello" to the Twilio number will elicit a response of "Hi!" and the following gif:
<p align="center">
  <img src="https://c.tenor.com/zQWHcFPU1-gAAAAC/forrest-gump.gif" alt="Forrest Gump waving" />
</p>

* Sending an SMS of "bye" to the Twilio number will elicit a response of "Goodbye!" and the following gif:
<p align="center">
  <img src="https://media0.giphy.com/media/COYGe9rZvfiaQ/200.gif" alt="Homer Simpson disappearing into bush" />
</p>

* Sending an SMS of anything other than "hello" or "bye" to the Twilio number will elicit a response of "come again?" and the following gif:
<p align="center">
  <img src="https://c.tenor.com/oRhDoibDP0kAAAAM/barack-obama-former-us-president.gif" alt="Obama confused" />
</p>

* Sending images will elicit the images being sent back along with the response "Back at cha." This response is concated with other responses per [this documentation](https://www.twilio.com/docs/messaging/twiml/message#nouns).

* Calling the number presents you with an interactive IVR

## Technologies Used
This API was built in [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) using the [express](https://expressjs.com/) framework.

## Install
This repo is continuously deployed to Heroku. No local installation is required, but if you did want to run a development server here is what you'd need to do:

### Run the development server
1. Clone down this repository `git clone https://github.com/alexmkio/twilio-sms-server`
2. CD into your local clone `cd twilio-sms-server`
3. Install project dependencies `npm install`
4. Run `npm run dev`

### Install [ngrok](https://ngrok.com/download)
1. Follow the instructions [here](https://www.youtube.com/watch?v=f9jE5ywz8cs)
2. `brew install ngrok/ngrok/ngrok`
3. `ngrok authtoken <token>`
4. `ngrok http 1337`
5. Copy forwarding https address + '/sms' to the messaging webhook for our Twilio phone number in the [Twilio console](https://console.twilio.com/)

## Contributors
This application was built by [Alex Kio](https://www.linkedin.com/in/alexkio/).