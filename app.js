const request = require('request');

request('https://blaze.com/pt/games/crash', function (error, response, body) {
	console.error('error:', error);
	console.log('statusCode:', response && response.statusCode);
	console.log('body:', body);
});
