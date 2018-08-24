var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist/'));
app.get('/', function (request, response){
	response.sendFile(__dirname + '/dist/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port);