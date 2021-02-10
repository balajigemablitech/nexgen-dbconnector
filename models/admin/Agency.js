

const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

/**
 * Super admin accepeted agency  then save agency details
 */
var schema = new Schema({
  name: String,
  agencyId:Number,
  isMain:Boolean, //(for check main aganecy or sub agency),
  parentAgencyId: Number,//(for sub agency, store parent agency id)
  enable:Boolean,
  validityFrom: Date,
  validityTo: Date,
  channelType:{
    b2b: Boolean,
    b2c:Boolean
  } 

},{ autoIndex: false, versionKey: false});

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, { model: 'functions', field: 'agencyId' });

mongoose.model("agency", schema,'agency');
