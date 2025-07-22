const { handleInteraction } = require('../events/interactionCreate/handleInteraction');
const { handleReady } = require('../events/ready/handleReady');

function eventHandler(client) {
    client.once('ready', () => handleReady(client));
    client.on('interactionCreate', (interaction) => handleInteraction(interaction));
}

module.exports = { eventHandler };
