const mysql = require("mysql2");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "12345678",
    database: "Luma",
    multipleStatements: true
});

mysqlConnection.connect((err) =>{
    if(!err){
        console.log("Connected");
    }else{
        console.log(err);
    }
});

module.exports = mysqlConnection;
