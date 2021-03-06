var db = require('./db');

module.exports= {
	getById : function(id, callback){
		var sql = "select * from user where id=?";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from user";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql ="SELECT * FROM admin where username=? and password=?";
		db.getResults(sql, [user.uname, user.password], function(results){
			if(results.length > 0){			
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByUname: function(uname, callback){
		var sql = "select * from admin where username=?";
		
		db.getResults(sql, [uname], function(results){
			
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into admin values(?,?,?,?,?)";
		db.execute(sql, [user.name, user.username, user.mail, user.phone, user.password], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update : function(user, callback){		
		var sql = "update admin set name=?,username=?, mail=?, phone=?,password=? where username=?";
		db.execute(sql, [user.name, user.username, user.mail, user.phone, user.password,user.username], function(status){		
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}