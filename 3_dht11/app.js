var express = require('express');
var app = express();

var http     = require('http').Server(app);
var io       = require('socket.io')(http);

var SerialPort = require('serialport').SerialPort;

var ReadlineParser = require('@serialport/parser-readline').ReadlineParser;

var parsers    = SerialPort.parsers;
var sp = new SerialPort( 
{

  path: 'COM3',

  baudRate: 9600,
});

const parser = sp.pipe(new ReadlineParser({ delimiter: '\r\n' }));

sp.on('open', () => console.log('Port open'));
var ledStatus ="";
parser.on('data', function (data) {
	var rcv = data.toString();
	console.log("rcv = " + rcv);
	//온도 측정
	if (rcv.substring(0, 4) == 'temp'){
		var temp = parseInt(rcv.substring(4));
		console.log('temp : ' + temp);  
		io.emit('temp', temp);
	}

	//습도 측정
	if (rcv.substring(0, 4) == 'humi'){
		var humi = parseInt(rcv.substring(4));
		console.log('humi : ' + humi);  
		io.emit('humi', humi);
	}
  
});

app.use(express.static(__dirname + '/public'));

const port = 3000;
http.listen(port, function () {
  console.log('Server listening on http://localhost:' + port);
});