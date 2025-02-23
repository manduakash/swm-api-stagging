import express from "express";
import { insertWasteCollection, getWasteManagementDashboard ,getPropertiesWithWasteCollection,getEmployeeAttendance, getWasteCollectionData} from "../controllers/wasteCollectionController.js";

const router = express.Router();

router.post('/insertWasteCollection', insertWasteCollection);
router.post('/getWasteManagementDashboard', getWasteManagementDashboard);
router.post('/getPropertiesWithWasteCollection', getPropertiesWithWasteCollection);
router.post('/getEmployeeAttendance', getEmployeeAttendance);
router.post('/getWasteCollectionData', getWasteCollectionData);
export default router;
