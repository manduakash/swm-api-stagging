import express from "express";
import { insertWasteCollection } from "../controllers/wasteCollectionController.js";

const router = express.Router();

router.post('/insertWasteCollection', insertWasteCollection);

export default router;
