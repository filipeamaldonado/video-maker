const contentFilePath = './content.json'
const fs = require('fs')


function load() {
    const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8')
    const contentJson = JSON.parse(fileBuffer)
   
    return contentJson
}
 
function save(content) {
    const contentString = JSON.stringify(content)
    
    return fs.writeFileSync(contentFilePath, contentString)
 }

module.exports = {
    save,
    load
}