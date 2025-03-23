import express from "express";

import { insertWasteFacility , InsertAccidentReport, InsertAnnualReport, InsertAnnualReportOperator} from "../controllers/wasteFacilityController.js";

const router = express.Router();

router.post('/insertWasteFacility', insertWasteFacility);
router.post('/insertAccidentReport', InsertAccidentReport);
router.post('/insertAnnualReport', InsertAnnualReport);
router.post('/insertAnnualReportOperator', InsertAnnualReportOperator);
export default router;
