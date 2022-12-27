require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const admRouter = require('./routes/adminRouter')
const mongoose = require('mongoose')
const cors = require('cors')

//mongoose.connect(process.env.ATLAS_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
//    console.log('MongoDB conectado...')
//}).catch((error)=>{
//    console.log(error)
//})

app.use(cors())
app.get('/', (req, res)=>{res.send('ok')})
app.use('/user', express.json(), userRouter)

app.use('/private',express.json(), admRouter)


app.listen(process.env.PORT, ()=>{ console.log('Server is Running...') })
