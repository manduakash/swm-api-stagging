import express from "express";
import { insertProperty } from "../controllers/propertyController.js";

const router = express.Router();

router.post('/insertProperty', insertProperty);

export default router;
