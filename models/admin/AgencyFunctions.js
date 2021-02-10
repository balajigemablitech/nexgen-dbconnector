

const mongoose = require("mongoose");
var Schema = mongoose.Schema;


var schema = new Schema({
  functions:[],
  agencyId:Number

},{ autoIndex: false, versionKey: false});


mongoose.model("AgencyFunctions", schema,'AgencyFunctions');
