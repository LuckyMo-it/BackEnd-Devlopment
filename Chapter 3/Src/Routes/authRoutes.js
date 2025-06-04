import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

//auth/ routes
const router = express.Router()
router.post('/register', (req, res) => {
    //password dssd fdsfs dfsdfsdfwefheifhwf
    const { username, password } = req.body
    console.log(username, password)

    //encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8)
    //save the user and hashed password
    try {

        
        const insertUser = db.prepare(`
            insert into user (username,password) 
            values(?,?)
            
            `)
        const result = insertUser.run(username, hashedPassword)


        //now we have user i want to add first todo for them
        const defaultTodo = 'hello! add your first todo'
        const insertTodo = db.prepare(`
            insert into todos(user_id,task)
            values(?,?)
            `)
        insertTodo.run(result.lastInsertRowid, defaultTodo)

        //create a token

        const token=jwt.sign({id:result.lastInsertRowid},process.env.JWT_SECRET,{
            expiresIn:'24hr'
        })

        res.json({token})


    } catch (error) {
        console.log(error.message)
        res.sendStatus(503)
    }



})

router.post('/login', (req, res) => {
    const{username,password}=req.body
    try {
        const getUser=db.prepare(`
            select * from user where username=?
            `)
            const user=getUser.get(username)
            if(!user)
                return res.status(404).send({message:"user not found"})

            //checking password
            const passwordIsValid=bcrypt.compareSync(password,user.password)//returns boolean
            if(!passwordIsValid)
                return res.status(401).send({message:"password is incorrect"})

            const token=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'24hr'})
            res.send({token})


    } catch (error) {
        console.log(error.message)
        res.sendStatus(503)
    }
})

export default router