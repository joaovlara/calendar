import express from "express";
import { getFuncionario, addFuncionario, deleteFuncionario, saveFridayPairs, getFridayPairs, getCafe, addCafe, updateCafe } from "../controllers/employee.js";

const router = express.Router()

router.get("/", getFuncionario)

router.post("/", addFuncionario)

router.delete("/:id", deleteFuncionario)

//Duplas da limpeza

router.get("/getLimpeza", getFridayPairs)

router.post("/saveFridayPairs", saveFridayPairs); 

//Café

router.get("/getCafe", getCafe)

router.post("/addCafe", addCafe); 

router.put("/:id", updateCafe);

export default router