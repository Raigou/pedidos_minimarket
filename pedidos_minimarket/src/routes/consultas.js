const express=require('express');
const connection = require('express-myconnection');

const conn = require('../database');


//1)Alterar la tabla inventario para agregar la llave 
//foranea con referencia a la tabla administrador:

conn.query("ALTER TABLE inventario ADD FOREIGN KEY (rut_admin) REFERENCES administrador(rut_admin)",(err,res,campos)=>{
    console.log(res);
})


//2)Alterar la tabla producto para agregar la llave foranea con referencia a la tabla inventario:
conn.query("ALTER TABLE producto ADD FOREIGN KEY (id_inventario) REFERENCES inventario(id_inventario)",(err,res,campos)=>{
    console.log(res);
})



//3)Crear un administrador
conn.query("INSERT INTO administrador VALUES ('11.111.111-1','Juanito Perez','JPerez','123Pepito')",(err,res,campos)=>{
    console.log(res);
})



//4)Añadir inventario
conn.query("INSERT INTO inventario (cant_max,cant_min,cant_disp,rut_admin) VALUES (25,1,23,'11.111.111-1')",(err,res,campos)=>{
    console.log(res);
})

//5)Añadir un producto
conn.query("INSERT INTO producto (nombre_producto,precio,descuento_producto,id_inventario) VALUES ('Manzana',500,0,1)",(err,res,campos)=>{
    console.log(res);
})

//6)Utilizamos inner join para calcular el precio total rescatan datos de tablas anteriores
conn.query("INSERT INTO boleta (fecha,hora,precio_total,rut) SELECT '2021-09-15','11:02:45',SUM(producto.precio * carrito_compra.cont_producto),'22.222.222-2' FROM producto INNER JOIN carrito_compra ON (producto.id_producto= carrito_compra.id_producto)",(err,res,campos)=>{
    console.log(res);
})

//7)Actualizar precio
conn.query("UPDATE producto SET precio=550)",(err,res,campos)=>{
    console.log(res);
})

//8)Actualizar direccion
conn.query("UPDATE cliente SET direccion='colon 765'",(err,res,campos)=>{
    console.log(res);
})

//9)Mostrar todos los datos del cliente
conn.query("SELECT * FROM cliente",(err,res,campos)=>{
    console.log(res);
})


//10)Mostrar el nombre del producto y stock actual

conn.query("SELECT inventario.cant_disp, producto.nombre_producto FROM inventario inner JOIN producto on producto.id_inventario=inventario.id_inventario",(err,res,campos)=>{
    console.log(res);
})


//11)borrar todos los datos de boleta
conn.query("DELETE FROM boleta",(err,res,campos)=>{
    console.log(res);
})

//12)Borrar todos los datos de lo cliente

conn.query("DELETE FROM cliente",(err,res,campos)=>{
    console.log(res);
})


//13)Borrar base de datos

conn.query("drop DATABASE carrito_minimarket",(err,res,campos)=>{
    console.log(res);
})

