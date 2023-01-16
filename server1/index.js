const express = require("express")
const mongoose = require("mongoose")
const config = require('config')
const authRouter = require("./routers/authRouter.js")
const serverRouter = require("./routers/serverRouter.js")
const newsRouter = require("./routers/newsRouter.js")
const cors = require('cors')
const createServer = require('http').createServer
const corsMiddleware = require('./middleware/cors.middleware.js')
const onConnection = require('./socket_io/onConnection.js')
const ioS = require('socket.io');
const getFilePath = require('./utils/file.js')
const onError = require('./utils/onError.js')
const upload = require('./utils/upload.js')


const app = express()
const PORT = config.get("serverPort")
app.use(corsMiddleware);
app.use(express.json());


app.use('/api/auth', authRouter)
app.use('/api/server', serverRouter)
app.use('/api/news', newsRouter)

app.use('/upload', upload.single('file'), (req, res) => {
    if (!req.file) return res.sendStatus(400)
  
    // формируем относительный путь к файлу
    const relativeFilePath = req.file.path
      .replace(/\\/g, '/')
      .split('server1/userFiles')[1]
  
    // и возвращаем его
    res.status(201).json(relativeFilePath)
})

app.use('/files', (req, res) => {
    // формируем абсолютный путь к файлу
    const filePath = getFilePath(req.url)
  
    // и возвращаем файл по этому пути
    res.status(200).sendFile(filePath)
  })


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
        onError(e)
    }
}

start()

const server = createServer(app)

const io = new ioS.Server(server, {
  cors: "http://localhost:2228",
  serveClient: false
})

io.on('connection', (socket) => {
  onConnection(io, socket)
})

server.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`)
  })

// const app = express()
// const PORT = config.get("serverPort")

// app.use(corsMiddleware);
// app.use(express.json());
// app.use('/api/auth', authRouter)
// app.use('/api/server', serverRouter)
// app.use('/api/news', newsRouter)

// const start = async () => {
//     try{
//         await mongoose.connect(config.get("dbUrl"), {
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         })

//         app.listen(PORT, () => {
//             console.log('Server started on port ', PORT)
//         })

//     } catch (e){
//         console.log(e)
//     }
// }

// start()