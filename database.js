const {MongoClient} = require('mongodb');
const dbname = 'Terminal'
const url = 'mongodb://localhost:27017/'+dbname
const client = new MongoClient(url, {useUnifiedTopology: true});



async function conectar(){
    await client.connect(function(err){
        if(err){
           console.log(err);
           return;    
        }
        console.log('Estamos conectados')
    })

}
async function traer(){
    let db = client.db(dbname);
    let collection = db.collection('empresas');
       collection.find().toArray(function(er, docs){
           console.log(docs)
       })
    }
    
    async function guardar(user){
        let db = client.db(dbname)
        let collection = db.collection('empresas');
    
       
        collection.insertOne(user,function(resultado){
            console.log(resultado);
        })
    }
    async function eliminar(user){
        let db = client.db(dbname)
        let collection = db.collection('empresas');
    
                collection.deleteOne(user,function(resultado){
                console.log(resultado);
        });
    }
    
    async function Actualizar(user){
        let db = client.db(dbname)
        let collection = db.collection('empresas');
    
        collection.updateOne(user,function(resultado){
            console.log(resultado);
    });
        
    
    }
    const state={
        db:null
    };

    const getdb =()=>{
        let db = client.db(dbname);
        return db
    }
    module.exports ={getdb,conectar,traer,guardar,eliminar,Actualizar};