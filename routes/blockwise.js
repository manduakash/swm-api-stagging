import express from "express";

import {getBlockWiseWasteCollection, getGPWiseWasteCollection,getVillageWiseWasteCollection,getGrantAuthorization} from "../controllers/blockwiseCollection.js";

const router = express.Router();


router.post('/getBlockWiseWasteCollection', getBlockWiseWasteCollection);
router.post('/getGPWiseWasteCollection', getGPWiseWasteCollection);
router.post('/getVillageWiseWasteCollection', getVillageWiseWasteCollection);
router.post('/getGrantAuthorization', getGrantAuthorization);

export default router;