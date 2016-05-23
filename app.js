

let fs = require("fs");
let names = process.argv[2];
let filePath = 'test1.txt';

fs.readFile(filePath, 'utf8', function(err, data)
{
	if(err) throw err;
	let inData = data+names.replace(/,/g, "\n")+"\n";
	fs.writeFile(filath, inData, (err) =>
	{
		if(err) throw err;
		console.log("it's saved !");
	});
});


