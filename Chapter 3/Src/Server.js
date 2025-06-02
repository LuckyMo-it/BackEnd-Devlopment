//old syntax
// const express=require('express')
//new syntax
import express from 'express'
const app=express()
const PORT=process.env.PORT ||5000

app.listen(PORT ,()=>{
    console.log(`server has Started on ${PORT}`)
})
