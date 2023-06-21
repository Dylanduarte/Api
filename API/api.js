
const express=require('express');
const app=express();
const puerto=4000;
const cors=require ('cors')
const routes =require('./routes/routespizzas');

require("./config/database");

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}))
app.use('',routes);


app.listen(puerto,()=>{
    console.log(` Server corriendo por el puerto${puerto}`)
});



