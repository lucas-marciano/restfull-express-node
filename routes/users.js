const express 	= require('express');
const user 		= require('../models/user');
const router 	= express.Router();

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

router.delete('/delete/:id', function (req, res, next) {
	user.deleted(req.params.id, function (err, count) {
    	if (err) {
      		res.json(err);
    	} else {
     		res.json(count);
    	}
  	});
});

router.put('/update/:id', function (req, res, next) {
	user.update(req.params.id, req.body, function (err, rows) {
    	if (err) {
      		res.json(err);
    	} else {
      		res.json(rows);
    	}
  	});
});

router.post('/login/', function (req, res, next) {
	user.login(req.body, function (err, rows) {
    	if (err) {
      		res.json(err);
    	} else {
      		res.json(rows);
    	}
  	});
});

module.exports = router;