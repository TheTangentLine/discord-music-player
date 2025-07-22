require('dotenv').config(); // Load environment variables

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const path = require('path');

const commands = [];

// Load commands dynamically from the /commands directory
function loadCommands() {
    const commandsPath = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(path.join(commandsPath, file));
        const slashCommand = new SlashCommandBuilder()
            .setName(command.name)
            .setDescription(command.description);

        if (command.options) {
            command.options.forEach(option => {
                slashCommand.addStringOption(option);
            });
        }
        commands.push(slashCommand.toJSON());
    }
}

// Register commands to Discord's API
async function registerCommands() {
    loadCommands();
    const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}

module.exports = { registerCommands };
