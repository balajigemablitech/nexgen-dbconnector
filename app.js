var path = require('path');
require('dotenv').config({ path: path.join(__dirname, './property.env') });


//process.env.NODE_ENV = 'production';
var express=require("express");
var app=express();
var server=require('http').createServer(app);
var cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');

require('./models/admin/User');
require('./models/admin/AgencyRole');
require('./models/admin/Registration');
require('./models/admin/AuditTrail');
require('./models/admin/Agency');
require('./models/admin/Admin');





var dbConfig=require('./config/dbConfig');


var compression = require('compression');

var routes = require('./routes/index');
var port = normalizePort(process.env.PORT || '8003');
app.set('port', port);

server.listen(port);
//initapp();
console.log('Server running....',port);

//-----------------------
//app.use(timeout('600s'));
//Gzip compression middleware
app.use(compression());

function initapp(){
	mysqldb.createPool(dbConfig.config)
	.then(function() {

		console.log('Connected to MySql Successfully.');

	})
	.catch(function(err) {
		console.error('Error occurred creating database connection pool', err);
		console.log('Exiting process');
		process.exit(0);
	});
}

function normalizePort(val) {
	var port = parseInt(val, 10);
  
	if (isNaN(port)) {
	  // named pipe
	  return val;
	}
  
	if (port >= 0) {
	  // port number
	  return port;
	}
  
	return false;
  }

	

//app.use(flash());
app.locals.pretty=true;
//	Set JWT Authentication

//------------------------
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/public', express.static('public'));
//app.use(express.static(path.join(_dirname, 'public')));
app.use('/', routes);
//var redis=require('./config/Redis');
// Initializing MongoDB Connection
var mongoDB=require('./config/MongoDB');
var mongoose = require('mongoose');

	
