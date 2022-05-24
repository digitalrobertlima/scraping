const http = require('http');
  
let options = {
	host: 'www.google.com.br',
	path: '/',
	method: 'GET'
};

http.request(options, (response) => {
	console.log(`STATUS: ${response.statusCode}`);
}).end();
