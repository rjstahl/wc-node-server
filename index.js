// Create a variable for express which will help run the server
const express = require('express')
//Create a path variable which can find files on our server
const path = require('path')
// Use express to initialize our server application
const app = express()

// Tell node to compile .pug files to HTML
app.set('view engine', 'pug')

// Tell node where out public/static assets are (css, js, images,etc.)
app.use(express.static(path.join(__dirname, './public')))

// set up our routes
app.get('/', function(req, res){
    res.render('index', {tile:'Home'})
})
app.get('/about', function(req, res){
    res.render('about',{tile:'About'})
})
app.get('/contact', function(req, res){
    res.render('contact',{tile:'Contact'})
})
// Tell the server how to start
// Our server url is localhost:3000
app.listen(3000, function(){
    console.log('server is running on port 3000')
})