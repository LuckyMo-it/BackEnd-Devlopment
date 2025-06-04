//old syntax
// const express=require('express')
//new syntax
import express from 'express'
import path,{dirname} from 'path'
import { json } from 'stream/consumers'
import { fileURLToPath } from 'url'
import authRoutes from './Routes/authRoutes.js'
import todoRoutes from './Routes/todoRoutes.js'
import authMiddleware from './Middleware/authMiddleware.js'

const app=express()
const PORT=process.env.PORT ||5000

//files stuff
const __fileName=fileURLToPath(import.meta.url)
const __dirname=dirname(__fileName)

//middlewares
app.use(express.static(path.join(__dirname,"../public")))
app.use(express.json())//exprects json request
//serving html file


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

//modularising endpoints 
app.use('/auth',authRoutes)
app.use('/todos',authMiddleware,todoRoutes)


app.listen(PORT ,()=>{
    console.log(`server has Started on ${PORT}`)
})

