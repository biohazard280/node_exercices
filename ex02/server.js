const http = require('http');// const -> variable qui ne peut pas changer
const routes = require('./modules/routes');


const fs = require('fs');
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => 
{

	let url = req.url;

	console.log(url);

	if(url.indexOf('.png') !== -1 || url.indexOf('.jpg') !== -1)
	{
		res.statusCode = 200;
		let readStream = fs.createReadStream(`public${url}`);
		readStream.on('open', function()
		{
			readStream.pipe(res);
		});
		readStream.on('error', function(err)
		{
			res.end(err);
		});		
	}
	else
	{
		if(url !== '/' && url !== '/favicon')
		{
			if(url == '/page2')
			{
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				fs.readFile('public/page2.html', 'utf8', (err,data)=>
				{
					console.log(data);
					res.end(data);
				});			
			}
			else
			{
				res.statusCode = 404;
				res.setHeader('Content-Type', 'text/plain');
				res.end('This is a 403 error please smile!!! :)');				
			}

		}
		else
		{
			routes(req, res);
		}
	}

});

server.listen(port, hostname, () =>
{
	console.log(`Server running at http://${hostname}:${port}/`);
});