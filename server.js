var express = require('express');

var app = express();

app.use('/', express.static('public'));
app.use('/dist', express.static('bower_components'));

var server = app.listen(3001, function () {
	console.log('http://localhost:3001/');
});
