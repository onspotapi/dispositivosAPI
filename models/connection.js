const mysql = require('mysql');
const conn = mysql.createPool({
    host: "192.168.30.1",
    user: "server",
    password: "123456789",
    database: 'onspot',
    port: '3306'
});

module.exports = conn;