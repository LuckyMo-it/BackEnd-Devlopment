//this is where server happens

const express=require('express')
//creates backend application
const app=express()
const PORT=8383
//HTTP Verbs and routs
//this routes are called endpoints
const data={
    users:['Hijame']

}
//CRUD(Verbs)- Create(Post) Read(GET) Update(Put) Delete(delete)

//Middleware
//this config server for incoming json request
app.use(express.json())

//TYPE 1:WebSite Endpoints:
app.get("/",(req,res)=>{

// res.send     Status(202)
res.send(`
    <body style="background:pink;color:blue;">
    <h1>Data</h1>
    <p>${JSON.stringify(data)}
    </p>
    <a href="/dashboard" >DashBoard</a>
    </body>
    `)

})


app.get("/dashboard",((req,res)=>{
    console.log("wow very dangourous")
    res.send(`
        <body>
        <h1>Dashboard</h1>
        <a href="/">Home</a>
        </body>
        `)
}))
//website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in  a browser)
//api endpoints 


//TYPE-2:API Endpoints
app.get('/api/data',(req,res)=>{
    
    res.status(599).send(data)
})
app.post("/api/data",(req,res)=>{
    //someone want to create a user when they click on sign up
    const newData=req.body
    console.log(newData)
    data.users.push(newData.name)
    res.sendStatus(201)
})
app.delete("/api/data",(req,res)=>{
    const newData=req.body
    data.users.pop()
    console.log("user is deleted from last")
    res.sendStatus(203)
})


app.listen(PORT,()=>console.log(`Server has started on ${PORT}`))