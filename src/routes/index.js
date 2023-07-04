import express from "express"
import { getAllBooks, createController, updateController, deleteController } from "../controllers/index.js"

const router = express.Router()

router.get('/', getAllBooks )
router.post('/create', createController)
router.put('/update/:id', updateController )
router.delete('/delete/:id', deleteController )

export default router