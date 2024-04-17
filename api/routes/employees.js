import express from "express";
import { getFuncionario, addFuncionario, deleteFuncionario, saveFridayPairs } from "../controllers/employee.js";

const router = express.Router()

router.get("/", getFuncionario)

router.post("/", addFuncionario)

router.delete("/:id", deleteFuncionario)

router.post("/saveFridayPairs", saveFridayPairs); 

export default router
