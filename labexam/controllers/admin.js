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
/* router.post('/edit', function(req, res){
	adminModel.getByUname(req.cookies['uname'], function(result){
	res.render('admin/edit', {user: result});
});
}); */
router.get('/edit', function(req, res){
	adminModel.getByUname(req.cookies['uname'], function(result){
	res.render('admin/edit', {user: result});
});
});
router.get('/edit/:uname', function(req, res){
		adminModel.getByUname(req.params.uname, function(result){
		res.render('admin/edit', {user: result});
	});
});
router.post('/edit', function(req, res){
	
	var user = {
		name: req.body.name,
		username: req.body.uname,
		mail: req.body.mail,
		phone: req.body.phone,
		password: req.body.password
	};
	adminModel.update(user, function(status){
		if(status){
			res.redirect('/admin/edit');
		}else{
			res.redirect('/admin/edit/'+req.params.uname);
		}
	});
});
module.exports = router;