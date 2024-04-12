import express from "express"
import employeeRoutes from "./routes/employees.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", employeeRoutes)

app.listen(8800)