var http = require('http');
var express = require('express');

var portNum = process.argv[2];

var app = express();
app.get('/home', function(req, res) {
	res.end('Hello World!');
}).listen(portNum);