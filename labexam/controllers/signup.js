var express = require('express');
var router = express.Router();
var adminModel = require.main.require('./models/admin-model');
var customerModel = require.main.require('./models/customer-model');

router.get('/', function(req, res){
	res.render('signup/index');
});

 router.post('/', function(req, res){
	if(req.body.usertype =="admin"){
		var user = {
			name: req.body.name,
			username: req.body.uname,
			mail: req.body.mail,
			phone: req.body.phone,
			password: req.body.password
		};
		adminModel.insert(user, function(status){
			if(status){
				res.redirect('/login');
			}else{
				res.send("try with another username");
			}
		});
	}else{
		var user = {
			name: req.body.name,
			username: req.body.uname,
			mail: req.body.mail,
			phone: req.body.phone,
			password: req.body.password
		};
        console.log(user);
		customerModel.insert(user, function(status){
			if(status){
				res.redirect('/login');
			}else{
				res.send("try with another username");
			}
		});
	}
}); 
module.exports = router;