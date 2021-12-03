var express = require('express')

var app = express()

app.listen(3000, function(){
    console.log("start!");
})

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/main.html")
})

app.use(express.static('public'))