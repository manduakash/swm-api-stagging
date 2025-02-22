import express from "express";
import { insertProperty, getPropertyByUniqueNumberModel } from "../controllers/propertyController.js";

const router = express.Router();

router.post('/insertProperty', insertProperty);
router.post('/getPropertyByUniqueNumberModel', getPropertyByUniqueNumberModel);

export default router;
