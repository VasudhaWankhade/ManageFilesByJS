// Why file managing? ==> To make db data and data from backend server accessible to browser and perform 
//different operations on that data

// In cypress cy.task() ==> command to access db data and backend server data and use iit in test cases

const fs = require('fs') // inbuilt module import
let dir = './directory'
let file = './directory/intro.txt'

//                                      SYNC 

// read sync file

// let read = fs.readFileSync(file, { encoding: 'utf-8' })
// console.log(read) // return buffer value

// // over write

// let overwrite = fs.writeFileSync(file, 'Good Morning everyone')
// console.log(overwrite) // returns undefined

// // append 

// let append = fs.writeFileSync(file, 'I am learning JS', { flag: 'a' })
// console.log(append) // returns undefined

// // new file ==> if provided file path does not exist it will create new One

// let newF = fs.writeFileSync('info.txt', 'I am Python')
// console.log(newF) //returns undefined

// // check if directory or file exist or not

// if (fs.existsSync(dir)) {
//     console.log("exist")
// } else {
//     console.log(`${dir} not found`)
// }

// // delete file

// let del = fs.unlinkSync('info.txt')
// console.log(del) // returns undefined

// // rename file

// let rename = fs.renameSync(file, `${dir}/introduction.txt`)
// console.log(rename)

// append

fs.appendFileSync('./directory/introduction.txt', 'Bored') // No need to pass the flag