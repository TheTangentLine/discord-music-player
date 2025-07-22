module.exports = {
    name: 'ping',
    description: 'Check if the bot is responsive',
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
