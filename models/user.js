var db = require('../dbconnection');

var user = {
    login: function(user, callback){
        return db.query("SELECT * FROM users WHERE email = ? AND password = ?", [user.email, user.password], callback);
    },
    
    getAll: function(callback){
        return db.query("SELECT * FROM users", callback);
    },

    getById: function(id, callback){
        return db.query("SELECT * FROM users WHERE id = ?", [id], callback);
    },

    add:function(user, callback){
        return db.query("INSERT INTO users (name, email, password) VALUES(?, ?, ?)",[user.name, user.email, user.password], callback);
    },

    deleted:function(id, callback){
        return db.query("DELETE FROM users WHERE id=?", [id], callback);
    },

    update:function(id, user, callback){
        return db.query("UPDATE users SET name=?, email=?, password=? WHERE id=?",[user.name, user.email, user.password, id], callback);
    }
};

module.exports = user;