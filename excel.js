const xlsx = require('xlsx')
const fs = require('fs')
let filePath = './Data.xlsx'

// read excel file

let wb = xlsx.readFile(filePath, { cellDates: true })
console.log(wb)
console.log(wb.SheetNames)

// read sheet 

let workSheet = wb.Sheets['products']
    // console.log(workSheet)

let readableJson = xlsx.utils.sheet_to_json(workSheet)
console.log(readableJson)

fs.writeFileSync(filePath, JSON.stringify(readableJson, null, 2))

// Got json data

let json = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
console.log(json)

// create new workbook

let newWb = xlsx.utils.book_new()

// create new sheet

let newSheet = xlsx.utils.json_to_sheet(json)

// appened sheet 

xlsx.utils.book_append_sheet(newWb, newSheet, 'production')

xlsx.writeFile(newWb, 'NewWorkbook.xlsx')