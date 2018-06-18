var express = require('express');
var user 	= require('../models/user');
var router 	= express.Router();

router.get('/:id?', function (req, res, next) {
	if (req.params.id) {
		user.getById(req.params.id, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
	  });
	} else {
		user.getAll(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}

	  });
	}
});

router.get('/:email/:password', function (req, res, next) {
	user.login(req.params.email, req.params.password, function (err, rows) {
    	if (err) {
      		res.json(err);
    	} else {
     		res.json(rows);
    	}
  	});
});

module.exports = router;