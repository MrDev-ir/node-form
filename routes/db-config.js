import mysql from 'mysql'; 

const connection = mysql.createConnection({
    host:"localhost",
    user:"",
    password:"",
    database:"login_db"
});

module.exports = connection;