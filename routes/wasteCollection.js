import express from "express";
import { insertWasteCollection, getWasteManagementDashboard ,getPropertiesWithWasteCollection,getEmployeeAttendance, getWasteCollectionData,getWasteCollectionStats,getWasteManagementFacilities, getAccidentReports, getAnnualReports, getAnnualReportOperator} from "../controllers/wasteCollectionController.js";

const router = express.Router();

router.post('/insertWasteCollection', insertWasteCollection);
router.post('/getWasteManagementDashboard', getWasteManagementDashboard);
router.post('/getPropertiesWithWasteCollection', getPropertiesWithWasteCollection);
router.post('/getEmployeeAttendance', getEmployeeAttendance);
router.post('/getWasteCollectionData', getWasteCollectionData);
router.post('/getWasteCollectionStats', getWasteCollectionStats);
router.post('/getWasteManagementFacilities', getWasteManagementFacilities);
router.post('/getAccidentReports', getAccidentReports);
router.post('/getAnnualReports', getAnnualReports);
router.post('/getAnnualReportOperator', getAnnualReportOperator);
export default router;
