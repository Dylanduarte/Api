const express=require('express');
const router = express.Router();

const {
    todaslasPizzas,
    traerUnaPizza,
    agregarUnaPizza,
    eliminarPizza,
    actualizarPizza,
    eliminarPizzaBody
} = require("../controllers/controllerspizzas")



//trae todas las pizzas
router.get("/pizzas",todaslasPizzas)

//trae una pizza
router.get("/unapizza/:pizza",traerUnaPizza)

//agrega una pizza
router.post("/cargarpizza",agregarUnaPizza)

//elimina una pizza
router.delete("/eliminarpizza/:pizza",eliminarPizza)

router.put("/nuevaPizza/:id",actualizarPizza)

router.delete("/eliminarPizzaBody",eliminarPizzaBody)

module.exports=router;