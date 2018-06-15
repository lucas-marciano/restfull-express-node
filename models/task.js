var db = require('../dbconnection');

var task = {
    getAll: function(callback){
        return db.query("SELECT * FROM task", callback);
    },

    getById: function(id, callback){
        return db.query("SELECT * FROM task WHERE id = ?", [id], callback);
    },

    add:function(task, callback){
       
        return db.query("INSERT INTO task VALUES(?, ?)",[task.title, task.status], callback);
    },

    deleted:function(id, callback){
        return db.query("DELETE FROM task WHERE id=?", [id], callback);
    },

    update:function(id, task, callback){
        return db.query("UPDATE task SET title=?, Status=? WHERE id=?",[task.title, task.status, id], callback);
    }
};

module.exports = task;