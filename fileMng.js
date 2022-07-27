const fs = require('fs') // importing the module for file management
const dirPath = './directory'
const filePath = '/one.txt'

// to read file

// let read = fs.readFileSync(dirPath + filePath, { encoding: 'utf8' }) //2nd parameter ==> to make file readable
//     // console.log(read)       // returns Buffer
// console.log(read)

// to check wheather file exist or not

// let exist = fs.existsSync(dirPath + filePath)
// console.log(exist)

// program1 

// if (fs.existsSync(dirPath)) {
//     let a = fs.readFileSync(dirPath + filePath, { encoding: 'utf8' })
//     console.log(a)
// } else {
//     console.log(`${a} not found`)
// }

// to overWrite or write in the file

// if (fs.existsSync(dirPath)) {
//     fs.writeFileSync(dirPath + filePath, '\n I am learnig Python also', { flag: 'a' }) // flag:a ==> to append and if not given ==> to overwrite
// } else {

//     console.log(`${dirPath} not found`)
// }

// To rename file

// if (fs.existsSync(dirPath)) {
//     fs.renameSync(dirPath + filePath, `hi.txt`)
// } else {
//     console.log(`$ {dirPath} not found`)
// }

// To delete file

if (fs.existsSync(dirPath)) {
    fs.unlinkSync(dirPath + '/directoryhi.txt')
} else {
    console.log(`${dirPath} not found`)
}