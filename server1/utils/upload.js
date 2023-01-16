const existsSync = require('fs').existsSync
const mkdirSync = require('fs').mkdirSync
const multer = require('multer')
const dirname =require('path').dirname
const join = require('path').join
const fileURLToPath = require('url').fileURLToPath

// путь к текущей директории
const _dirname = __dirname

const upload = multer({
  storage: multer.diskStorage({
    // директория для записи файлов
    destination: async (req, _, cb) => {
      // извлекаем идентификатор комнаты из HTTP-заголовка `X-Room-Id`
      const roomId = req.headers['x-room-id']
      // файлы хранятся по комнатам
      // название директории - идентификатор комнаты
      const dirPath = join(_dirname, '../userFiles', roomId)

      // создаем директорию при отсутствии
      if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true })
      }

      cb(null, dirPath)
    },
    filename: (_, file, cb) => {
      // названия файлов могут быть одинаковыми
      // добавляем к названию время с начала эпохи и дефис
      const fileName = `${Date.now()}-${file.originalname}`

      cb(null, fileName)
    }
  })
})

module.exports = upload