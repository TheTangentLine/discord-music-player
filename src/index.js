const { Client, Intents } = require('discord.js');
const { registerCommands } = require('./utils/registerCommands');
require('dotenv').config(); // Load environment variables from .env file
const { commandHandler, eventHandler } = require('./handlers');

// Create bot client
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

// Register commands when the bot starts
registerCommands();

// Handle events and commands
eventHandler(client);
commandHandler(client);

// Log the bot in
client.login(process.env.TOKEN);
