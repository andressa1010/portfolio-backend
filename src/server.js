
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import projetosRoutes from "./routes/projetosRoutes.js"


const app = express()
dotenv.config()

app.use(express.json())
app.use(express.static("public"))
app.use(cors())


app.use("/api/portfolio", projetosRoutes)


app.get("/", (req,res)=>{
    res.send("Portfolio andressa funcionando!")
})

app.listen(3001, ()=>{
    console.log("Servidor em execução na porta http://localhost:3001")
})