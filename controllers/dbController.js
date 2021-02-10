let responseHandler=require('../utils/ResponseHandler');
let dbService=require('../services/dbOperationsService');


exports.save=function(req,res){
	let reqParams=req.body;
	dbService.save(reqParams,function(error,data){
		if(error){
			responseHandler.handleError(res,error);
		}else{
			responseHandler.handleSuccess(res,data);
		}
	})
	
}

exports.update=function(req,res){
	let reqParams=req.body;
	dbService.update(reqParams,function(error,data){
		if(error){
			responseHandler.handleError(res,error);
		}else{
			responseHandler.handleSuccess(res,data);
		}
	})
	
}
exports.updateOnly=function(req,res){
	let reqParams=req.body;
	dbService.updateOnly(reqParams,function(error,data){
		if(error){
			responseHandler.handleError(res,error);
		}else{
			responseHandler.handleSuccess(res,data);
		}
	})
	
}


exports.saveMany=function(req,res){
	let reqParams=req.body;
	dbService.saveMany(reqParams,function(error,data){
		if(error){
			responseHandler.handleError(res,error);
		}else{
			responseHandler.handleSuccess(res,data);
		}
	})
	
}

exports.fetchRecords=function(req,res){
	let reqParams=req.body;
	dbService.fetchRecords(reqParams,function(error,data){
		console.log("--------response",error,data)
		if(error){
			responseHandler.handleError(res,error);
		}else{
			responseHandler.handleSuccess(res,data);
		}
	})
	
}

exports.fetchAll=function(req,res){
	let reqParams=req.body;
	dbService.findAll(reqParams,function(error,data){
		console.log("--------response",error,data)
		if(error){
			responseHandler.handleError(res,error);
		}else{
			responseHandler.handleSuccess(res,data);
		}
	})
	
}

exports.deleteMany=function(req,res){
	let reqParams=req.body;
	dbService.deleteMany(reqParams,function(error,data){
		console.log("--------response",error,data)
		if(error){
			responseHandler.handleError(res,error);
		}else{
			responseHandler.handleSuccess(res,data);
		}
	})
	
}

exports.signin=function(req,res){
	let reqParams=req.body;
	dbService.signin(reqParams,function(error,data){
		if(error){
			responseHandler.handleError(res,error);
		}else{
			responseHandler.handleSuccess(res,data);
		}
	})
	
}

