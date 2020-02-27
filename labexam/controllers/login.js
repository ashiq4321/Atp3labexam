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
	if(req.body.usertype=='admin'){
		adminModel.validate(user, function(status){
			if(status){
				res.cookie('uname', req.body.uname);
				res.redirect('/admin');
			}else{
				res.render('login/error');
			}
		});
	}else{
		customerModel.validate(user, function(status){
			if(status){
				res.cookie('uname', req.body.uname);
				res.redirect('/customer');
			}else{
				res.render('login/error');
			}
		});
	}
		

});

module.exports = router;