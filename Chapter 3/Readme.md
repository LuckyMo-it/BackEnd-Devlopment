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


## I modularized routes using express.Router()

made different routes and using them in server.js using 
`express.use('/auth',authRoutes)`


## Bcrypt 
- it convert password to irreversable encrypted password

## Prepare statment

- `db.prepare` run sql queries and i used `?` as placeholder 
- then run it using `varName.run(,.., placeholerVariable)`

## JWT
- when user register i give him a token using `jwt.sign()`

- i used login as **POST** because **GET** added that sensitive info to url
but POST not 


## Authentication Middleware

`app.use('/route',middleware,routing)`

- I used `jwt.verify()` which takes callback which have *decoded* argument which decoded id from token 

## Req.params /:id
- we can send json but there is another way

# req.query /?task="omg"

- /123?task="omg"


## Added delete and update 
```js
router.delete('/:id',(req,res)=>{
    const{id}=req.params
    const{userId}=req.userId
    const deleteTodos=db.prepare(`
        delete from todos where id=? and user_id=?`)
        deleteTodos.run(id,userId)
})
```