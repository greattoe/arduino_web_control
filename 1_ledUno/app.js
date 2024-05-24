const express  = require('express');

const app      = express();
 

const path = require('path');
 

const SerialPort = require('serialport').SerialPort;

const sp = new SerialPort( {

  path:'COM5',

  baudRate: 9600
});

 

const port = 3000;

 

app.get('/led_on',function(req,res)

{

	sp.write('1\n\r', function(err){

		if (err) {

            return console.log('Error on write: ', err.message);

        }

        console.log('send: led on');

		res.writeHead(200, {'Content-Type': 'text/plain'});

		res.end('LED ON\n');

	});

});

 

app.get('/led_off',function(req,res)

{

	sp.write('0\n\r', function(err){

		if (err) {

            return console.log('Error on write: ', err.message);

        }

        console.log('send: led off');

		res.writeHead(200, {'Content-Type': 'text/plain'});

		res.end('LED OFF\n');

	}); 

});

 

app.use(express.static(__dirname + '/public'));

 

app.listen(port, function() {

    console.log('listening on *:' + port);

});
