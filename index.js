const express = require('express')
const app = express()
require('dotenv/config')
const port = 3002 || process.env.port
const mongoose = require('mongoose')
const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')

app.use(express.urlencoded({extended : false}))

app.use('/users', authRouter)
app.use('/', userRouter)




mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })


app.listen(port, console.log('Server connected'))