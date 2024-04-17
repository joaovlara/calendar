import express from "express";
import { getFuncionario, addFuncionario, deleteFuncionario } from "../controllers/employee.js";
import { saveFridayPairs } from "../controllers/limpeza.js";

const router = express.Router()

router.get("/", getFuncionario)

router.post("/", addFuncionario)

router.delete("/:id", deleteFuncionario)

router.post("/", saveFridayPairs)

export default router
