
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
/**
 * @author Madhavi Vaka
 * @description Admin login Table
 */
var schema = new Schema({
    email:{type:String},
    password:{type:String}

},{ autoIndex: false, versionKey: false});




mongoose.model("Admin", schema,'Admin');
