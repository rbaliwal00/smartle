const express = require("express");

const mysqlConnection = require("../connection");
const Router = express.Router();

Router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM enrollment JOIN session ON enrollment.session_id = session.session_id", (err, rows, fields) =>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});

module.exports = Router;