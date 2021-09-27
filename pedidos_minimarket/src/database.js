const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'carrito_minimarket'
});
conn.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log("Base de Datos conectada")}
});

module.exports= conn;






conn.end