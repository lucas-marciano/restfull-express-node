const express 	= require('express');
const user 		= require('../models/user');
const router 	= express.Router();
 
app.post('/:id', function(requisition, res) {
    if (!requisition.files){
        return res.status(400).send('No files were uploaded.');
    } else {
        // The name of the input field (i.e. "nameFile") is used to retrieve the uploaded file
        let nameFile = requisition.files.nameFile;
        let _dirname = "./upload/user/"

        router.put('/update/:id', function (req, res, next) {
            user.avatar(requisition.params.id, _dirname + nameFile, function (err, rows) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            });
        });
    }
});