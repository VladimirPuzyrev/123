const express = require("express")
const mongoose = require("mongoose")
const config = require('config')
const router = require("../server/routers/auth.router.js")
const corsMiddleware = require('./middleware/cors.middleware')

const app = express()
const PORT = config.get("serverPort")

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', router)

const start = async () => {
    try{
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })

    } catch (e){
        console.log('пошел нахуй')
    }
}

start()