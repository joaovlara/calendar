import express from "express";
import { getFuncionario, addFuncionario, deleteFuncionario, saveFridayPairs, getLimpeza } from "../controllers/employee.js";

const router = express.Router()

router.get("/", getFuncionario)

router.post("/", addFuncionario)

router.delete("/:id", deleteFuncionario)

//Duplas da limpeza

router.get("/getLimpeza", getLimpeza)

router.post("/saveFridayPairs", saveFridayPairs); 

export default router
