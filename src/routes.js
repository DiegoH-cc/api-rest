import { Router } from "express";
import SelecaoCrontroller from "./app/controllers/SelecaoCrontroller.js";

const router = Router()

// ROTAS
router.get('/selecoes', SelecaoCrontroller.index)
router.get('/selecoes/:id', SelecaoCrontroller.show)
router.post('/selecoes', SelecaoCrontroller.store)
router.put('/selecoes/:id', SelecaoCrontroller.update)
router.delete('/selecoes/:id', SelecaoCrontroller.delete)

export default router