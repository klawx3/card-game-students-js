var mysql = require('mysql');
var fs = require('fs');
var parameters = JSON.parse(fs.readFileSync('config.json', 'utf8'));

var connection = mysql.createConnection({
    host     : parameters.mysql.ip,
    user     : parameters.mysql.user,
    password : parameters.mysql.password,
    database : parameters.mysql.database
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to db as id: ' + connection.threadId);
});



module.exports = connection;