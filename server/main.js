var express = require('express')
var bodyParser = require('body-parser')

var persons = require('./routes/tasks')
var cors = require('cors')

var port = 3030

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', persons)

app.listen(port, () => {
	console.log('Server started on port ' + port)
})
