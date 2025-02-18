import express from "express";
import { getAllPropertyTypes, getAllUserTypes, getBlocksByDistrict, getDistrictsByState, getGPsByBlock, getVillagesByGP } from '../controllers/masterController.js';
const router = express.Router();


router.post('/getDistrictsByState', getDistrictsByState);
router.post('/getBlocksByDistrict', getBlocksByDistrict);
router.post('/getGPsByBlock', getGPsByBlock);
router.post('/getVillagesByGP', getVillagesByGP);
router.post('/getAllPropertyTypes', getAllPropertyTypes);
router.post('/getAllUserTypes', getAllUserTypes);

export default router;