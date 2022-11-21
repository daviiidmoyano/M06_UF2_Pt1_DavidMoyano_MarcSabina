'use strict'
// ----------------------VARIABLES-----------------------------------------
var dataTable;
//---------------------------------------------------------

const express = require('express')
const bodyParser=require('body-parser')
const app=express()
const cors=require('cors')
const mysql=require('mysql');
const path =require('path')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',express.static(path.join(__dirname,'public')))

console.log(__dirname);

// -----------------Conection Params-----------------------
var connection = mysql.createConnection({
   host:'localhost',
   database:'m06_uf2_pt1',
   user:'root',
   password:''
})

// ---------------------- Server connection

app.get('/api/login', function (req, res){
   console.log("Conexion a Base de Datos correcta");

   //consulta a BBDD
   //paso 1. conectarnos, connection es la cadena de conexion del inicio
   connection.connect(function(err){
      console.log(err);
      //si la conexion falla
      if(err){
         console.log('Error connecting: '+err.stack);
         return;
      }
      //si la conexion ha ido bien
      console.log('Connected as ID' + connection.threadId);
   }) //cerramos connecion.conect

   //Paso 2: sis estamos conectados hacemos la consulta
   connection.query('SELECT * FROM clienttable',function(error, results, fields){
    
      if(error){//si hay error en la consulta
         res.status(400),send({resultats : null})
      }else{//si todo ok
         res.status(200).send({resultats : results})
      }
   })//end connection query
   connection.end();
})//end app login

app.listen(3000, ()=>{
   console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})
