import express from "express";
import { getFuncionario, addFuncionario, deleteFuncionario } from "../controllers/employee.js";

const router = express.Router()

router.get("/", getFuncionario)

router.post("/", addFuncionario)

router.delete("/:id", deleteFuncionario)

export default router
