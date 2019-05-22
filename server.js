var express = require('express')
var bodyParser = require('body-parser')

var tasks = require('./routes/tasks')
var cors = require('cors')

var port = 3000

var app =  express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port)