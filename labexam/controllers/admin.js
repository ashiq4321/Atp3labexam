var express = require('express');
var router = express.Router();
var adminModel = require.main.require('./models/admin-model');

/* router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
}); */

router.get('/', function(req, res){
	adminModel.getByUname(req.cookies['uname'], function(result){
		res.render('admin/index', {user: result});
	});
});
router.get('/edit/:uname', function(req, res){
	adminModel.getByUname(req.params.uname, function(result){
		res.render('home/edit', {user: result});
	});
});
router.post('/edit/:id', function(req, res){
	
	var user = {
		name: req.params.name,
		uname: req.body.uname,
		phone: req.body.phone,
		mail: req.body.mail,
		password: req.body.password,
		
	};

	userModel.update(user, function(status){
		if(status){
			res.redirect('/home/view_users');
		}else{
			res.redirect('/home/edit/'+req.params.id);
		}
	});
});
module.exports = router;