const Alexa = require('ask-sdk-core');

export const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = "Listen folks, when it comes to help, nobody does it better than me, okay? Nobody. You're gonna love this help, believe me. It's gonna be tremendous, fantastic. So here it is: You ask Alexa, and she delivers. Simple as that. I mean, I've built the best help system ever, really, it's amazing. Just say, 'Alexa, help me,' and you'll see. It's gonna be huge.";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};