const express = require('express')
const userRouter = require('./controllers/userRoutes')


const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const allowedOrigin =["https://localhost:9000",'https://localhost:9001']
app.use(cors({
  origin:function(origin,callback){
    if(!origin) return callback(null,true)
    if(allowedOrigin.includes(origin)){
      return callback(null,true)
    }else{
      return callback(new Error("Not allowed by cors"))
    }
  }
}))


const PORT = 9000


app.use('/api/users',userRouter)
app.get('/',(req,res)=>{
  res.send({
    message:"hello"
  })
})

app.listen(PORT,()=>{
  console.log("server running")
})