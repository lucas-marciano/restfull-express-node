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

router.post('/', function (req, res, next) {
	task.add(req.body, function (err, count) {
    	if (err) {
      		res.json(err);
    	} else {
      		res.json(req.body); //or return count for 1 &amp;amp;amp; 0
    	}
  	});
});

router.delete('/:id', function (req, res, next) {
	task.deleted(req.params.id, function (err, count) {
    	if (err) {
      		res.json(err);
    	} else {
     		res.json(count);
    	}
  	});
});

router.put('/:id', function (req, res, next) {
	task.update(req.params.id, req.body, function (err, rows) {
    	if (err) {
      		res.json(err);
    	} else {
      		res.json(rows);
    	}
  	});
});

module.exports = router;