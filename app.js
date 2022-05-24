const https = require('https');

const options = {
	hostname: 'www.google.com.br',
	port: 443,
	path: '/',
	method: 'GET',
};

const request = https.request(options, response => {
	console.log(`statusCode: ${response.statusCode}`);

	response.on('data', d => {
		process.stout.write(d);
	});
});

request.on('error', error => {
	console.error(error);
});

request.end();
