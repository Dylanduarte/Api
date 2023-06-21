const mysql=require('mysql2')

const dbInfo={
    host:'localhost',
    user:'root',
    database:'pizzeria'
    
};

const dbConection=mysql.createConnection(dbInfo);

dbConection.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Servidor conectado a DB SQL")
    }
});

module.exports =dbConection;