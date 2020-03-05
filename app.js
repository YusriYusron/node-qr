var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/assets'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.render('index', {url : "Etatatat"})
})

app.listen('3000', (request, response) => {
    console.log('Open http://localhost:3000/')
})