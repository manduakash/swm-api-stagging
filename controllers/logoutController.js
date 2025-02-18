import { logoutModel } from '../models/logoutModel.js';
import logger from '../utils/logger.js';

export const logout = async (req, res) => {
    try {
       const result = await logoutModel(req.user.UserID, " ", " ");
        if (result == 0) {
            logger.debug(
                JSON.stringify({
                    API: "logout",
                    REQUEST: {EntryuserId :req.user.UserID},
                    RESPONSE: {
                        status: 0,
                        message: "Logout successfully"
                    },
                })
            );
            return res.status(200).json({
                status: 0,
                message: "Logout successfully",
            });
        } else {
            logger.debug(
                JSON.stringify({
                    API: "logout",
                    REQUEST: {EntryuserId: req.user.UserID},
                    RESPONSE: {
                        status: 1,
                        message: "Failed to logout",
                    },
                })
            );
            return res.status(400).json({
                status: 1,
                message: "Failed to logout",
            });

        }
    } catch (error) {
        logger.error("Error:", error);
        res.status(500).json({
            status: 1,
            message: "Failed to logout",
            data: null,
        });
    }
};

