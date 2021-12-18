var express = require('express')
 var app = express()
 var router = express.Router()
 var path = require('path')
 var mysql = require('mysql')

 var connection = mysql.createConnection({
     host     : 'localhost',
     port     : 3306,
     user     : 'root',
     password : 'myyj4093!',
     database : 'gwp_db'
 });

 connection.connect();


 router.get('/', function(req,res){
     console.log('get join url')
     res.sendFile(path.join(__dirname, '../../public/register.html'))
 })


 module.exports = router;