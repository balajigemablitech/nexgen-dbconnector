

const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var schema = new Schema({
  function: {
    title: String,
    subMenu :[
      {title: String}
    ]
  },

},{ autoIndex: false, versionKey: false});


mongoose.model("functions", schema,'functions');
