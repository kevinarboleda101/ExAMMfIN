const express = require('express');  
const handle = require('handlebars');
 const bodyParser = require('body-parser');
const db = require('./database');

const port = 3000;
const app  = express();
const path = require('path');




db.conectar();

const { response, request } = require('express');
//const { MongoClient } = require('mongodb');


app.use(bodyParser.json());
/*
 app.get('/', (req, res) =>{
    res.send('que pasa perrito');

 });


 app.listen(port, ()=>{
 console.log(`app corriendo en el puerto ${port}`);

 });
*/
 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname,'index.html'));
 });


 app.get('/usuarios', (req, res)=>{
     db.traer();
     res.send('Seccion de usuarios');
 });


 app.post('/', (request, response)=>{
    db.guardar(request.body);
    console.log(request.body)
     response.send('este es el post' + request.body.nombre);
 });


 app.post('/entrada', (request, response)=>{
    response.sendFile(path.join(__dirname,'index.html'));
     const entrada =request.body;
    db.guardar(request.body);
    console.log(request.body)
     response.send('este es el post' + request.body.nombre +entrada);
 });


 app.post('/postsunction',(req, res)=> {
    Posts.guardar(req.body.post, function(err, nuevoPost) {
    if (err) {
         console.log('huboerror');
    } else {
          res.redirect('/posts');
       }
     })
   });


 app.listen(port, () =>
 {
     console.log('corriendo en el puerto'+port)
 })


 app.delete('/', (req, res) =>{
     db.eliminar();
     console.log(req.body)
res.send('eliminar usuario kaarr '+ req.body.name)

 })


 app.put('/',(req, res) =>{
     Actualizar(req, res);
     console.log(req.body)
res.send(`actulizzado ${req.body.name}`)

 });


 app.get('/todos', (req, res)=>{
     db.getdb().collection('empresas').find({_id:0},{nombre:1}).toArray((err,document)=>{
        if(err)
            console.log(err,'paso un errrorr');
        else{
        res.json(document);
        }
     });

 });


app.use((err,req, res,necx)=>{
   res.status(err.status).json
       error:{
           message:err.message
       }
   
})
 app.get('/posts',(req,res) =>{
     res.render('new');
 });
 

 

 app.post('/posts', function(req,res){
     db.guardar(req.body.post, function(err, nuevoPost){
         if(err){
             console.log('hubo error');
         }else{
             res.redirect('/posts');
         }
     })
 })

