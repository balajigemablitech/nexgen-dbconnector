let mongoose=require('mongoose')

exports.fetchRecords=function(reqBody,c){
    console.log('db fetch records--------------------',reqBody)
    let { model, filter, projection, option, aggregator, params } = reqBody
    if (aggregator) {
		let m=mongoose.model(model);
    let agg = m[aggregator](filter, option, params)
    if (agg) {
      mongoose.models[model].aggregate(agg).exec((err, docs) => {
		  console.log('eeeeeeeeeeee',err,docs)
      if (!err && docs && docs.length > 0) {
          return c(null,docs);
      } else {
          return c(err,null);
      }
      });
      } else {
        return c('error',null)
      }
    } else {
      mongoose.models[model].find(filter, projection, option).lean().exec((err, docs) => {
        console.log("fetch data-------",err,docs)
        if(err){
          return c(err,null);
        }
        else{
          if(docs && docs.length > 0){
            return c(null,docs);
          }
          else{
            return c("No Doc's Found",null);
          }
        }		
      })
    }
}

exports.save= (params, cb) => {
  let {model,data}=params;
  new mongoose.models[model](data).save((err, doc) => {
      if (!err && doc) {
          return cb(null,doc);
      } else {
          return cb(err,null);
      }
  })
}

exports.saveMany =(params,cb) =>{
  let {model,data}=params;

    mongoose.models[model].collection.insertMany(data, (err, docs) => {
      console.log(err,docs)
        if (!err && docs) {
            return cb(null,docs);
        }
        return cb(err,null);
    })
}

exports.update= (params, cb) => {
  let {model,f,u}=params;
  mongoose.models[model].findOneAndUpdate(f,u, { upsert: true, new: true }, (err, doc) => {
    if (!err && doc) {
      return cb(null,doc);
    }
    return cb(err,null);
  })
}

exports.updateOnly= (params, cb) => {
  let {model,f,u}=params;
  mongoose.models[model].findOneAndUpdate(f, u,(err, doc) => {
    if (!err && doc) {
      return cb(null,doc);
    }
    return cb(err,null);
  })
}


exports.findAll= (params, c) => {
  let {model,filter}=params;
  mongoose.models[model].find(filter, {}, (err, docs) => {
    if(err){
      return c(err,null);
    }
    else{
      if(docs && docs.length > 0){
        return c(null,docs);
      }
      else{
        return c("No Doc's Found",null);
      }
    }	
  })

}


exports.deleteMany= (params, cb) => {
  let {model,filter}=params;
  mongoose.models[model].deleteMany(filter, (err, doc) => {
      if (!err && doc) {
        return cb(null,doc);
      } else {
        return cb(err,null);
      }
  })
}

