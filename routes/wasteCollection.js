import express from "express";
import { insertWasteCollection, getWasteManagementDashboard ,getPropertiesWithWasteCollection,getEmployeeAttendance} from "../controllers/wasteCollectionController.js";

const router = express.Router();

router.post('/insertWasteCollection', insertWasteCollection);
router.post('/getWasteManagementDashboard', getWasteManagementDashboard);
router.post('/getPropertiesWithWasteCollection', getPropertiesWithWasteCollection);
router.post('/getEmployeeAttendance', getEmployeeAttendance);
export default router;
