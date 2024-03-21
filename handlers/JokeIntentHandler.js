const Alexa = require('ask-sdk-core');

const jokes = [
    "What's the difference between a black person and a monkey? I voted for a monkey last election and he won.",
    "What do you call a black person on the moon? An astronaut, you racist.",
    "Why do a black person always have a hard time? Because they're always in the back of the line.",
    "Muslims are like a box of chocolates. They kill your dog.",
    "What's the difference between a black person and a park bench? A park bench can support a family.",
]



export const JokeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'JokeIntent';
    },
    handle(handlerInput) {
        const joke = jokes[Math.floor(Math.random() * jokes.length)];


        return handlerInput.responseBuilder
            .speak(joke)
            .getResponse();
    }
};
