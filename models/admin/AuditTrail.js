

const mongoose = require("mongoose");
var Schema = mongoose.Schema;


var schema = new Schema({
  operation: String,
  function: String,
  oldValue: String,
  newValue: String,
  updateBy: String,
  updatedOn: {type: Date,
  default: Date.now}

},{ autoIndex: false, versionKey: false});


mongoose.model("AuditTrail", schema,'AuditTrail');
