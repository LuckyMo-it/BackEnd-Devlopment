import express from 'express'
import db from '../db.js'

const router=express.Router()
//get all todos
router.get('/',(req,res)=>{})
router.post('/',(req,res)=>{})

//update a todo
//dynamic query id
router.put('/:id',(req,res)=>{

})

router.delete('/:id',(req,res)=>{

})

export default router