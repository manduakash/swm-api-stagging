import express from "express";

import {getBlockWiseWasteCollection} from "../controllers/blockwiseCollection.js";

const router = express.Router();


router.post('/getBlockWiseWasteCollection', getBlockWiseWasteCollection);
export default router;