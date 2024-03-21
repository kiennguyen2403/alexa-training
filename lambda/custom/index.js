const Alexa = require('ask-sdk-core');
const { LaunchRequestHandler } = require('./handlers/LaunchRequestHandler');
const { HelpIntentHandler } = require('./handlers/HelpIntentHandler');
const { JokeIntentHandler } = require('./handlers/JokeIntentHandler');

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        new LaunchRequestHandler(),
        new HelpIntentHandler(),
        new JokeIntentHandler()
    )
    .addErrorHandlers()

