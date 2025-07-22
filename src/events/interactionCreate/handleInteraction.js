const { nextPage, previousPage, showPageResults } = require('../utils/pagination');

function handleInteraction(interaction) {
    if (!interaction.isButton()) return;

    // Handle pagination buttons
    if (interaction.customId === 'next') {
        nextPage();
        showPageResults(interaction);
    } else if (interaction.customId === 'previous') {
        previousPage();
        showPageResults(interaction);
    }
}

module.exports = { handleInteraction };
