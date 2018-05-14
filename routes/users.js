var express = require('express');
var router = express.Router();
var db = require('../db.js');


router.get('/', function(req, res, next) {
    db.query('SELECT * FROM usuario', function(err, rs){
        if(err) throw err;
        res.send(rs);
    });
});

module.exports = router;
