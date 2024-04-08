import express from "express";
import { getEmployee, addEmployee, updateEmployee, deleteEmployee } from "../controllers/employee.js";

const router = express.Router()

router.get("/", getEmployee)

router.post("/", addEmployee)

router.put("/:id", updateEmployee)

router.delete("/:id", deleteEmployee)

export default router