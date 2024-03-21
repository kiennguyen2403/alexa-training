/*
 * Copyright (C) 2020 Dabble Lab - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms and conditions defined in file 'LICENSE.txt', which
 * is part of this source code package.
 *
 * For additional copyright information please
 * visit : http://dabblelab.com/copyright
 */

const Alexa = require('ask-sdk-core');

const jokes = [
  "What's the difference between a black person and a monkey? I voted for a monkey last election and he won.",
  'What do you call a black person on the moon? An astronaut, you racist.',
  "Why do a black person always have a hard time? Because they're always in the back of the line.",
  'Muslims are like a box of chocolates. They kill your dog.',
  "What's the difference between a black person and a park bench? A park bench can support a family.",
];

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = 'Hey, My name is Lil Trump! Ask me something.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .withSimpleCard('Lil Trump', speakOutput)
      .getResponse();
  },
};

const JokeIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'JokeIntent';
  },
  handle(handlerInput) {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];

    return handlerInput.responseBuilder
      .speak(joke)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speakOutput = "Listen folks, when it comes to help, nobody does it better than me, okay? Nobody. You're gonna love this help, believe me. It's gonna be tremendous, fantastic. So here it is: You ask Alexa, and she delivers. Simple as that. I mean, I've built the best help system ever, really, it's amazing. Just say, 'Alexa, help me,' and you'll see. It's gonna be huge.";

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.error(`Error handled: ${error.message}`);

    const speakOutput = "Sorry, I don't speak Chinese. This is America, speak English or get out";

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    JokeIntentHandler,
    HelpIntentHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
