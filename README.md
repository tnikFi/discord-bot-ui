# Discord bot control panel UI

WIP control panel web app for a Discord bot that doesn't yet exist. Uses [React.js](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/).

## Goals of the front end app

- [ ] Implement OAuth2 login with Discord
- [ ] Can be used to modify the bot's configuration
- [ ] Can be used to view the bot's status
- [ ] Can be used to view moderation logs


### Note

This is a development build using TypeScript and React. Therefore it needs to be transpiled before it can be used. This is done by running `npm run build` in the root directory. This will create a `build` directory with the transpiled code.
The development build can be used with Node.js by running `npm run dev` in the root directory.


### Another note

The backend is not yet implemented, so the app will not work as intended. The backend will be implemented in [TypeScript](https://www.typescriptlang.org/) with [Express.js](https://expressjs.com/).