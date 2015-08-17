var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	
	var page = '.' + request.url;
	if(page === './') {
		page = './index.html';
	}

	fs.readFile(page, function(err, data) {
		if(err){
			response.writeHead(500);
			response.write('Sorry, no page here');
			console.log(err);
			response.end();
		}
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.write(data);
		response.end();
	});
	
}).listen(8080, function () {
	console.log('Listening on 8080');
});
