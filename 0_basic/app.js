var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

const port = 3000;

app.listen(port, function(){
    console.log('listening on *:' + port);
});