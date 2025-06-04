import express from 'express'
import db from '../db.js'

const router=express.Router()
//get all todos
router.get('/',(req,res)=>{

    const getTodos=db.prepare(`
        select *from todos where user_id=?
        `)
    const todos=getTodos.all(req.userId)
    res.json(todos)
})
router.post('/',(req,res)=>{})

//update a todo
//dynamic query id
router.put('/:id',(req,res)=>{

})

router.delete('/:id',(req,res)=>{

})

export default router