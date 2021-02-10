
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
/**
 * @author Madhavi Vaka
 * @description Registration Table
 */
var schema = new Schema({
    registrationId:Number,
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
    status:String, //Requested, Accepeted,Rejected
    verificationCode:String
   

},{ autoIndex: false, versionKey: false});


autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, { model: 'Registration', field: 'registrationId' });

mongoose.model("Registration", schema,'Registration');
