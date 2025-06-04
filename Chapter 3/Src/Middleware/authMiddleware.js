import jwt from 'jsonwebtoken'

function authMiddleware(req,res,next){
    const token=req.Authorization
    if(!token)
        return res.status(401).json({message:"no token provided"})

    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err)
            return res.json({message:"invalild token"})
        req.userId=decoded.id 
        next()

    })
}

export default authMiddleware