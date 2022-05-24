const request = require('request');

request('http://www.google.com.br', function (error, response, body) {
	console.error('error:', error);
	console.log('statusCode:', response && response.statusCode);
	console.log('body:', body);
});
