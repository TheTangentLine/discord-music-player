const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, fileType) {
    let files = [];
    const items = fs.readdirSync(dirPath);

    items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files = files.concat(getAllFiles(fullPath, fileType)); // Recurse into subdirectories
        } else if (item.endsWith(fileType)) {
            files.push(fullPath);
        }
    });

    return files;
}

module.exports = { getAllFiles };
