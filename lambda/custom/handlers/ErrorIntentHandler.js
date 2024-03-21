export const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.error(`Error handled: ${error.message}`);

        const speakOutput = "Sorry, I don't speak Chinese. This is America, speak English or get out";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
