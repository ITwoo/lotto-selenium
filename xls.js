const fs = require('fs');
const HTMLParser = require('node-html-parser')
const lodash = require('lodash')


const xls = () => {
  const url = '../../Downloads/'
  const path = url + 'excel (13).xls'
  const file = fs.readFileSync(path, 'utf8')
  const parser = HTMLParser.parse(file)
  const one = parser.querySelectorAll(`tr:not(align) > td:nth-child(n+14)`) // 당첨 번호
  const round = parser.querySelectorAll(`tr>td[align="right"]:nth-child(-n+2)`) //회차

  let i = 0;

  const lotto = {
    round: '',
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    bonus: ''
  }

  const array = [];

  one.map((x) => {
    const start = x.toString().indexOf('>');
    const end = x.toString().indexOf('<', start - 1,)
    if (i > 3) {
      switch ((i - 3) % 7) {
        case 1:
          lotto.one = x.toString().substring(start + 1, end)
          break;
        case 2:
          lotto.two = x.toString().substring(start + 1, end)
          break;
        case 3:
          lotto.three = x.toString().substring(start + 1, end)
          break;
        case 4:
          lotto.four = x.toString().substring(start + 1, end)
          break;
        case 5:
          lotto.five = x.toString().substring(start + 1, end)
          break;
        case 6:
          lotto.six = x.toString().substring(start + 1, end)
          break;
        case 0:
          lotto.bonus = x.toString().substring(start + 1, end)
          const temp = { ...lotto }
          array.push(temp)
          // console.log(lotto)
          break;
      }
    }
    i++
  })

  round.map((x, index) => {
    const start = x.toString().indexOf('>');
    const end = x.toString().indexOf('<', start - 1,)
    // console.log(x.toString().substring(start + 1, end))
    // console.log(array[index])
    if (array[index]) {
      array[index].round = x.toString().substring(start + 1, end)
    }
  })

  console.log(array)
  return array;
}

module.exports = xls;
