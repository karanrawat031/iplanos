var express = require('express');
var app     = express();
var port    = process.env.PORT || 8080;
var os      = require('os');

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',function(req,res){
	var type = os.type();
	var osversion = os.release();
    var lang = req.headers['accept-language'];
    var host = req.headers.host;
    var arch = os.arch();
    var eol  = os.EOL;
    var cpus = os.cpus();
    var end  = os.endianness();
    var freemem = os.freemem();
    var address = os.networkInterfaces()['VMware Network Adapter VMnet1'][1].address;
    var totalmem = os.totalmem();
    var uptime = os.uptime();

	res.render('landing',{type:type,osversion:osversion,lang:lang,host:host,arch:arch,eol:eol,cpus:cpus,end:end,freemem:freemem,address:address,totalmem:totalmem,uptime:uptime});
});


app.listen(port);
console.log('The magic happens on port ' + port); 