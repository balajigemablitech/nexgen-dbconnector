var express = require('express');
var router = express.Router();
var dbController = require("../controllers/dbController");

router.get('/', function(req,res,next){
	
	res.send("Welcome to Mongo API")
});


router.post("/api/db/save",dbController.save);
router.post("/api/db/update",dbController.update);
router.post("/api/db/updateOnly",dbController.updateOnly);


router.post("/api/db/saveMany", dbController.saveMany);
router.post("/api/db/fetchRecords", dbController.fetchRecords);
router.post("/api/db/fetchAll", dbController.fetchAll);
router.post("/api/db/deleteMany", dbController.deleteMany);

router.post("/api/db/signin", dbController.signin);






module.exports = router;
