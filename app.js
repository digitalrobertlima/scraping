const http = require('http');

const server = http.createServer((req, res) => {

	if(req.url == '/') {

		res.write("<h1>This is the server!<h1>");
		res.statusCode = 200;

		res.end();
	}
});

server.listen((3000), () => {
	console.log('Server is Running...');
});
