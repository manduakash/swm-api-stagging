import express from "express";
import { createUser, insertGrantAuthorization } from "../controllers/userController.js";

const router = express.Router();

router.post('/createUser', createUser);
router.post('/insertGrantAuthorization', insertGrantAuthorization);

export default router;
