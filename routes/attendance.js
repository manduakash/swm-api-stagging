import express from "express";
import { saveAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

router.post('/saveAttendance', saveAttendance);

export default router;
