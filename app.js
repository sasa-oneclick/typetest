var http = require ('http');
var dt = require('./DateTimeReturn')

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write("The date and time are currently: "+  dt.myDateTime());
	res.end('Hello Im Sasa! How are you?');

}).listen(8080);