const fs = require('fs');
const path = require('path');

// Load all commands
const commands = new Map();

function loadCommands() {
    const commandsPath = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(path.join(commandsPath, file));
        commands.set(command.name, command);
    }
}

function commandHandler(client) {
    client.on('messageCreate', async (message) => {
        if (message.author.bot) return;

        const prefix = '!';
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!commands.has(commandName)) return;

        try {
            await commands.get(commandName).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('There was an error while executing that command!');
        }
    });
}

module.exports = { loadCommands, commandHandler };
