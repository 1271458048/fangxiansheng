var express = require('express')
var formidable = require('formidable')
var path = require('path')
var fs = require('fs')
var app = express()


app.get('/getallW', (req, res) =>{
    fs.readFile('./site.json', (err, data) =>{
        var data = JSON.parse(data.toString())
        console.log(data)
        res.json(data)
    })
})


app.listen(3300, () =>{
    console.log(3300)
})