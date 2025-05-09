import { Router } from "express";
import { atualizarProjetos, 
buscarProjetosId, 
buscarTodosProjetos,
criarNovosProjetos, 
deletarProjetos } from "../controllers/projetosControllers.js";


const router = Router()

router.get("/", buscarTodosProjetos)
router.post("/", criarNovosProjetos)
router.get("/:id", buscarProjetosId)
router.put("/:id", atualizarProjetos)
router.delete("/:id", deletarProjetos)

export default router