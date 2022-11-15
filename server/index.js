const express = require("express")
const mongoose = require("mongoose")
const config = require('config')
const router = require("../server/routers/auth.router.js")

const app = express()
const PORT = config.get("serverPort")

app.use(express.json())
app.use('/api/auth', router)

const start = async () => {
    try{
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log('asd', PORT)
        })

    } catch (e){
        console.log('пошел нахуй')
    }
}

start()