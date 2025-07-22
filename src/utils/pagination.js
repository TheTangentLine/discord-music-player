let currentPage = 0;
let searchResults = [];

function setSearchResults(results) {
    searchResults = results;
    currentPage = 0; // Reset to first page
}

function getPageResults() {
    const start = currentPage * 5;
    const end = start + 5;
    return searchResults.slice(start, end);
}

function showPageResults(interaction) {
    const pageResults = getPageResults();
    const resultsText = pageResults.map((video, index) => `${start + index + 1}. ${video.title}`).join('\n');
    const pageNumber = currentPage + 1;

    interaction.reply({
        content: `**Page ${pageNumber}:**\n${resultsText}`,
        ephemeral: true, // Optionally, make it ephemeral so only the user sees it
    });
}

function nextPage() {
    if ((currentPage + 1) * 5 < searchResults.length) {
        currentPage++;
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
    }
}

module.exports = {
    setSearchResults,
    showPageResults,
    nextPage,
    previousPage,
};
