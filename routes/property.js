import express from "express";
import { insertProperty, getPropertyByUniqueNumber } from "../controllers/propertyController.js";

const router = express.Router();

router.post('/insertProperty', insertProperty);
router.post('/getPropertyByUniqueNumber', getPropertyByUniqueNumber);

export default router;
