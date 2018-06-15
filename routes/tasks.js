var express = require('express');
var task 	= require('../models/Task');
var router  = express.Router();

router.get('/:id?', function (req, res, next) {
  	if (req.params.id) {
		task.getById(req.params.id, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
  	} else {
		task.getAll(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}

		});
  	}
});

router.post('/add/', function (req, res) {

	console.log(req);
	console.log(req.body.title);
	console.log(req.body.status);

	task.add(req.body, function (err) {
    	if (err) {
      		res.json(err);
    	} else {
      		res.json(req.body);
    	}
  	});
});

router.delete('/delete/:id', function (req, res, next) {
	task.deleted(req.params.id, function (err, count) {
    	if (err) {
      		res.json(err);
    	} else {
     		res.json(count);
    	}
  	});
});

router.put('/update/:id', function (req, res, next) {
	task.update(req.params.id, req.body, function (err, rows) {
    	if (err) {
      		res.json(err);
    	} else {
      		res.json(rows);
    	}
  	});
});

module.exports = router;