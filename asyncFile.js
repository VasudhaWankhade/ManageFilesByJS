const fs = require('fs')
let dir = './directory'
let file = './directory/introduction.txt'

// // read async 

fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

// overwrite async

fs.writeFile(file, 'I hate cypress', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Data is saved")
    }
})

// append 

fs.appendFile(file, 'I like to play cricket', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Data is updated")
    }
})

// delete 

// fs.unlink(file, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("File is deleted")
//     }
// })