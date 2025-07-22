# discord-music-player:
I create a bot in discord for playing music

# 1. Folder structure:
```
└── 📁discord-music-player
    └── 📁src
        └── 📁commands
            ├── ping.js
            ├── search.js
        └── 📁events
            └── 📁interactionCreate
                ├── handleInteraction.js
            └── 📁ready
                ├── handleReady.js
        └── 📁handlers
            ├── commandHandler.js
            ├── eventHandler.js
        └── 📁utils
            ├── getAllFiles.js
            ├── pagination.js
            ├── registerCommands.js
        ├── index.js
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

# 2. Setup project:

Download all dependencies
```
git clone https://github.com/TheTangentLine/discord-music-player.git
cd discord-music-player
npm install
```

Create an .env file to load your token and id
```
TOKEN = your_token_id
CLIENT_ID = your_client_id 
GUILD_ID = your_guild_id
```

# Notices: 
As the project has just been tested locally, it still need more time before coming into production.
