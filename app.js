const https = require('https');

/*
 * const options = {
	hostname: 'www.blaze.com',
	port: 443,
	path: '/',
	method: 'GET',
};
*/

const request = https.request('https://blaze.com/sitemap.xml', 'GET', response => {
	console.log(`statusCode: ${response.statusCode}`);

	response.on('data', d => {
		process.stdout.write(d);
	});
});

request.on('error', error => {
	console.error(error);
});

request.end();
