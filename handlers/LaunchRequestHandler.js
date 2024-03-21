const jokes = [
    "Tell me a joke about a monkey",
]



export const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = "Hey, My name is Lil Trump! Ask me something.";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

