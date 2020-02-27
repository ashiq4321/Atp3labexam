var express = require('express');
var router = express.Router();
var customerModel = require.main.require('./models/customer-model');

/* router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
}); */

router.get('/', function(req, res){
	customerModel.getByUname(req.cookies['uname'], function(result){
		res.render('customer/index', {user: result});
	});
});
router.get('/edit/:uname', function(req, res){
	customerModel.getByUname(req.params.uname, function(result){
	res.render('customer/edit', {user: result});
});
});
module.exports = router;