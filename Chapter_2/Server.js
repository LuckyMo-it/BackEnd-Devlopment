//this is where server happens

const express=require('express')
//creates backend application
const app=express()
const PORT=8383
//HTTP Verbs and routs
//this routes are called endpoints
const data={
    name:"hajime",
    skill:"boxing"

}
//CRUD(Verbs)- Create(Post) Read(GET) Update(Put) Delete(delete)

//TYPE 1:WebSite Endpoints:
app.get("/",(req,res)=>{

// res.send     Status(202)
res.send(`
    <body style="background:pink;color:blue;">
    <h1>Data</h1>
    <p>${JSON.stringify(data)}
    </p>
    </body>
    `)

})

app.post("/api/data",(req,res)=>{
    const newData=req.body
})

app.get("/dashboard",((req,res)=>{
    console.log("wow very dangourous")
    res.send("<h1>Dashboard</h1>")
}))
//website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in  a browser)
//api endpoints 


//TYPE-2:API Endpoints
app.get('/api/data',(req,res)=>{
    
res.send(data)
})


app.listen(PORT,()=>console.log(`Server has started on ${PORT}`))