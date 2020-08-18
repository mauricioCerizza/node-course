const fs = require('fs')

/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)
console.log(dataBuffer.toString())

const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title) */

const jsonData = fs.readFileSync('1-json.json').toString()

const data = JSON.parse(jsonData)
data.name = "Mauricio"
data.age = 28

fs.writeFileSync('1-json.json', JSON.stringify(data))