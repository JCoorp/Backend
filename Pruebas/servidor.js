const express = require("express");
const app = express();


/*function saludar(){
    console.log("Bienvenido");   
}*/
function saludar(){
    console.log("Bienvenido"); 
}

app.get("/",saludar(),(req,res)=>{
    res.send("Hola mundo con express");
});

app.get("/home",saludar(),(req,res)=>{
    res.send("Estas en home");
});

app.listen(3000, ()=>{
    console.log("Servidor en http://localhost:3000");
});