var express = require('express');
var app = express();

app.use(express.static('dist'));
app.get('/', function (request, response){
	response.sendFile(__dirname + '/dist/index.html');
});

app.listen(parseInt(process.env._2038_PORT), e => {
	if (e) {
		console.error(e);
		process.exit(1);
	}	
	console.log(process.env._2038_READY);	
});