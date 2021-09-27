const bodyParser = require ("body-parser");
const express = require ("express");
const app = express();
const path = require ("path");

app.set("port", process.env.PORT|| 3000 );

app.use(express.json());

app.use(require('./routes/consultas'));

app.listen(app.get('port'), ()=>{
    console.log("servidor en puerto", app.get("port"))

});
