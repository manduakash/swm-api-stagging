import express from "express";

import { insertWasteFacility } from "../controllers/wasteFacilityController.js";

const router = express.Router();

router.post('/insertWasteFacility', insertWasteFacility);

export default router;
