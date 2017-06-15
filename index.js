// Create a variable for express which will help run the server
const express = require('express')

// Use express to initialize our server application
const app = express()

// Tell node to compile .pug files to HTML
app.set('view engine', 'pug')

// set up our routes
app.get('/', function(req, res){
    res.render('template')
})
// Tell the server how to start
// Our server url is localhost:3000
app.listen(3000, function(){
    console.log('server is running on port 3000')
})