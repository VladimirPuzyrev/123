const Router = require("express")

const router = new Router();


кщгеук.use('/upload', upload.single('file'), (req, res) => {
    if (!req.file) return res.sendStatus(400)
  
    // формируем относительный путь к файлу
    const relativeFilePath = req.file.path
      .replace(/\\/g, '/')
      .split('server/files')[1]
  
    // и возвращаем его
    res.status(201).json(relativeFilePath)
  })