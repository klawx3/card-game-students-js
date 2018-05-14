var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/',function(req, res){
    let query = "SELECT alumno.id, alumno.nombre, carta.id ,carta.descripcion, carta.image_url " +
        "FROM alumno, duenho_carta, carta " +
        "WHERE alumno.id = duenho_carta.usuario_fk AND duenho_carta.carta_fk = carta.id";
    db.query(query,(err, rs, next) => {
        if (err) throw err;
        res.send(rs);
    });
});

module.exports = router;