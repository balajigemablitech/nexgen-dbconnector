
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
/**
 * @author Madhavi Vaka
 * @description Registration Table
 */
var schema = new Schema({
    userId:Number,
    personalDetails: {
        agency: String,
        firstName: String,
        lastName: String,
        address: String,
        password: String,
        email: String,
        mobile: Number,
        mobileAreaCode:Number,
        remarks: String,
        country:String,
        city: String
    },
    poc: {
        poc: String,
        pocEmail: String,
        pocMobile: Number,
        pocMobileAreaCode:Number
    },
    account:{
        acc: String,
        accEmail: String,
        accMobile: Number,
        accMobileAreaCode:Number
    },
    enable:Boolean, 
    agencyId:Number,
    roleId:Number

   

},{ autoIndex: false, versionKey: false});


autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, { model: 'user', field: 'userId' });

mongoose.model("user", schema,'user');
