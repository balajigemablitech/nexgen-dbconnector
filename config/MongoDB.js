// Bring Mongoose into the app 
const mongoose = require('mongoose');
var dbService = require("../services/dbOperationsService");

/**
 *Set MongoDB URL based on Environment
 */
var DBURI = 'mongodb://127.0.0.1:27017/nextgen_demo'||process.env.db_url;
// Create the database connection 
mongoose.connect(DBURI, {
	//useMongoClient: true
}, function(error) {
	if (error) {
		console.log(error);
	}
});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
	console.log('Mongoose default connection open to ' + DBURI);
	//initial();
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
	console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});

  function initial() {
    let reqParams={
       model:"role"
    }
    dbService.fetchRecords(reqParams,function(err,docs){
       if(!err && (docs ==null || docs.length == 0)){
         let user={
           name:"user"
         }
         let moderator={
          name:"moderator"
         }
         let admin={
          name:"admin"
         }
          let roles=[]
          roles.push(user); roles.push(moderator); roles.push(admin)
          let persReq = {
            model: "role",
            data:roles   
          }
          dbService.saveMany(persReq,(err,docs) => {
          })
       }
      
    })
    
  }