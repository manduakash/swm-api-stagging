import express from "express";
import { insertProperty, getPropertyByUniqueNumber, getProperties } from "../controllers/propertyController.js";

const router = express.Router();

router.post('/insertProperty', insertProperty);
router.post('/getPropertyByUniqueNumber', getPropertyByUniqueNumber);
router.post('/getProperties', getProperties);

export default router;
