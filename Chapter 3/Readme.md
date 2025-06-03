## Npm downloads
`npm i express bcrypt jsonwebtoken nodemon`

- use `node --watch --env-file=.env ./src/Server.js`  --watch is replacing nodemon

## i used import syntax

- so add "type":"module", to package.json

## Path Jargon

- all static file server takes from `public` folder
- so in server file i used fileURLToPath() to convert import.meta.url to file path
`file://xyz/zyz.ds` to `/xyz/zyz.ds`
then i used dirname() to get directory name `xyz`

- and used middleware express.static() to tell that i need file from one abover foler ../public