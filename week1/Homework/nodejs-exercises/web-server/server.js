const http = require('http');
const fs = require('fs');
const path = require('path');

//create a server
let server = http.createServer(function (req, res) {
	let contentType, fileType;

	if (req.url === '/'){
        	contentType = 'text/html', fileType ='index.html';
    	} 
    	if (req.url === '/script.js') {
		contentType = 'text/javascript', fileType ='script.js';
    	}
    	if (req.url === '/style.css') {
		contentType = 'text/css', fileType ='style.css';
    	}
    	res.writeHead(200, { 'Content-Type': contentType });
		fs.readFile(path.join(__dirname, fileType), (err, content) => {
	  	res.writeHead(200)
	    	res.write(content);
	   	res.end()
    	})

});
const PORT = process.env.PORT || 3000
server.listen(PORT); // The server listens on port 3000
