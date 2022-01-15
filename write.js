const fs = require('fs')

const write = (array) => {
  array.map((x) => {
    fs.writeFileSync('log.txt', x.toString(), 'utf-8')
  })
}

module.exports = write