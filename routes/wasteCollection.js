import express from "express";
import { insertWasteCollection, getWasteManagementDashboard } from "../controllers/wasteCollectionController.js";

const router = express.Router();

router.post('/insertWasteCollection', insertWasteCollection);
router.post('/getWasteManagementDashboard', getWasteManagementDashboard);
export default router;
