


let fs = require("fs");
let names = process.argv[2];//recup le troisieme terme de la commande passée dans la console (node app.js clem -> recup clem)
let filePath = 'test1.txt';



fs.readFile(filePath, 'utf8', function(err, data)
{
	if(err) throw err;

	if(!names)
	{
		console.log('erreur, vous n\'avez pas mis de valeur lors de l\'appel de la fct');
	}
	else
	{
		let inData = data+names.replace(/,/g, "\n")+"\n";
		fs.writeFile(filePath, inData, (err) =>
		{
			if(err) throw err;
			console.log("it\'s saved !");
		});
	}

});


