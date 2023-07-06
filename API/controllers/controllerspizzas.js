const dbConection=require('../config/database')


const todaslasPizzas=(req,res)=>{
    dbConection.query('SELECT * FROM pizzas',(error,data)=>{
        if(error){
            res.send("No se pudo traer las pizzas." + error)
        }else{
            res.send(data)
        }    
    });


};


const traerUnaPizza=(req,res)=>{
    const nombrePizza=req.params.pizza;

    //pedirle a la BD que me traiga la info de la pizza
    dbConection.query(`SELECT * FROM pizzas WHERE nombre= ?`,[nombrePizza],(error,data)=>{

        if(error){
            res.send(error)
        }else{
            res.send(data)
        };
    } );

};


const agregarUnaPizza=(req,res)=>{
    //recibo data del front
    const {nombre,precio,} = req.body;
    

    //pedir a la BD que lo agregue
    dbConection.query('INSERT INTO pizzas (nombre, precio) VALUES(?,?)',[nombre,precio],(error,data)=>{
        if(error){
        res.send(error)
        }else{
            res.send("Pizza cargada exitosamente");
        }
    })

};



const eliminarPizza=(req,res)=>{
   
    //Traer info de que pizza eliminar
    const nombrePizza=req.params.pizza;

    //BD que la elimine
    dbConection.query('DELETE FROM pizzas WHERE nombre=?',[nombrePizza],(error,mensajeOk)=>{
        if(error){
            res.send(error)
        }else{
            res.send("La pizza " + nombrePizza + " se eliminó correctamente")
        }
    })
}

const actualizarPizza =(req,res)=>{
    const id=req.params.id;
    console.log(id)
    console.log(req.body)
    
    dbConection.query(`UPDATE  pizzas SET  ? WHERE id=?`,[req.body,id],(error,data)=>{
        if(error){
            res.send(error)
        }else{
            console.log("modificadoo")
            res.send("ok")
        }
    });
}

const eliminarPizzaBody=(req,res)=>{
    const {nombre}=req.body;
    dbConection.query('DELETE  FROM pizzas WHERE nombre=?',[nombre],(error,mensajeOk)=>{
        if(error){
            
            res.send(error)
            
        }else{
           
            res.status(200).json("La pizza se elimino correctamente")
        }
    })
}

module.exports={
    todaslasPizzas,
    traerUnaPizza,
    agregarUnaPizza,
    eliminarPizza,
    actualizarPizza,
    eliminarPizzaBody
};