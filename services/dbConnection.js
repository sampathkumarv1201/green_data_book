var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"db4free.net",
    user:"green_data_book",
    password:"12345678",
    database:"green_data_book",
    timezone:+0530
});

connection.connect(function(err){
    if(err)
        throw err;
    console.log("Connected");
});

module.exports = connection;