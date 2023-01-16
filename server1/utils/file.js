const unlink = require('fs/promises').unlink
const dirname = require('path').dirname
const join = require('path').join
const fileURLToPath = require('url').URLSearchParams
const onError = require('./onError')

// путь к текущей директории
const _dirname = __dirname
console.log(_dirname)
// путь к директории с файлами
const fileDir = join(_dirname, '../userFiles')

// утилита для получения пути к файлу
module.exports.getFilePath = (filePath) => join(fileDir, filePath)

// утилита для удаления файла
module.exports.removeFile = async (filePath) => {
  try {
    await unlink(join(fileDir, filePath))
  } catch (e) {
    onError(e)
  }
}