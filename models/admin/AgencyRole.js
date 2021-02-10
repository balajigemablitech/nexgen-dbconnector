

const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var schema = new Schema({
  name: String,
  roleId:Number,
  functions:[
   { 
     menu:[],
     subMenus:[]
   }
  ],
  agencyId:Number

},{ autoIndex: false, versionKey: false});

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, { model: 'AgencyRole', field: 'roleId' });

mongoose.model("AgencyRole", schema,'AgencyRole');
