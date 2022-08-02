import express, { Router } from "express";

import { getALLStates, getStateById, createState, updateState, deleteState } from "../controller/MidwestStates.js"

const router = express.Router();

router.get('/', getALLStates);
router.get('/:id', getStateById);
router.post('/', createState);
router.patch('/:id', updateState);
router.delete('/:id', deleteState);

export default router;