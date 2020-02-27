var express = require('express');
var router = express.Router();
var adminModel = require.main.require('./models/admin-model');
var customerModel = require.main.require('./models/customer-model');

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	var user = {
		uname: req.body.uname,
		password: req.body.password
	};
	
	if(req.body.usertype == "Admin"){
		
		}	
		else{
			res.send('invalid username/password');
		}
});

module.exports = router;