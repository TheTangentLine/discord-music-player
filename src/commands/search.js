const { setSearchResults, showPageResults, nextPage, previousPage } = require('../utils/pagination');
const ytdl = require('ytdl-core');

module.exports = {
    name: 'search',
    description: 'Search for YouTube videos and paginate results',
    options: [
        {
            name: 'query',
            description: 'The query to search for on YouTube',
            type: 3,  // String
            required: true,
        },
    ],
    async execute(interaction) {
        const query = interaction.options.getString('query');
        if (!query) return interaction.reply('Please provide a search query.');

        // Fetch search results from YouTube
        const results = await ytdl.getInfo(`ytsearch:${query}`);
        setSearchResults(results.video_details);

        // Show the first page of results
        showPageResults(interaction);

        // Add reactions or buttons for pagination (using buttons here)
        const { MessageActionRow, MessageButton } = require('discord.js');

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('previous')
                    .setLabel('Previous')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('next')
                    .setLabel('Next')
                    .setStyle('PRIMARY')
            );

        await interaction.editReply({
            content: `**Page 1:**\n${results.video_details.slice(0, 5).map((video, index) => `${index + 1}. ${video.title}`).join('\n')}`,
            components: [row],
        });
    },
};
