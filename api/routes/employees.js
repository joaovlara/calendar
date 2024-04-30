import express from "express";
import { getFuncionario, addFuncionario, deleteFuncionario, saveFridayPairs, getFridayPairs, getCafe, editarNomeCafe } from "../controllers/employee.js";

const router = express.Router()

router.get("/", getFuncionario)

router.post("/", addFuncionario)

router.delete("/:id", deleteFuncionario)

//Duplas da limpeza

router.get("/getLimpeza", getFridayPairs)

router.post("/saveFridayPairs", saveFridayPairs); 

//Cafe

router.get("/getCafe", getCafe)

router.put('/editarNome', editarNomeCafe);

export default router