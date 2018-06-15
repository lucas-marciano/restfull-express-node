var db = require('../dbconnection');

var task = {
    getAll: function(callback){
        return db.query("SELECT * FROM task", callback);
    },

    getById: function(id, callback){
        return db.query("SELECT * FROM task WHERE Id = ?", [id], callback);
    },

    add:function(task, callback){
        return db.query("INSERT INTO task VALUES(?, ?, ?)",[task.Id, task.Title, task.Status],callback);
    },

    deleted:function(id, callback){
        return db.query("DELETE FROM task WHERE Id=?",[id],callback);
    },

    update:function(id, task, callback){
        return db.query("UPDATE task SET Title=?, Status=? WHERE Id=?",[task.Title, task.Status,id], callback);
    }
};

module.exports = task;