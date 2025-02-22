import { saveAttendanceModel } from "../models/attendanceModel.js";
import logger from "../utils/logger.js";

export const saveAttendance = async (req, res) => {
  try {
    const { UserID, Latitude, Longitude, AttendanceType } = req.body;

    // Validate required fields
    if (!(UserID && Latitude && Longitude && AttendanceType)) {
      logger.debug(
        JSON.stringify({
          API: "saveAttendance",
          REQUEST: { UserID, Latitude, Longitude, AttendanceType },
          RESPONSE: { success: false, message: "Invalid Input Parameters" },
        })
      );

      return res.status(400).json({
        success: false,
        message: "Invalid Input Parameter(s)",
        data: null,
      });
    }

    // Call the model function
    const result = await saveAttendanceModel(UserID, Latitude, Longitude, AttendanceType);

    // Check if result is null (indicating an error)
    if (!result) {
      logger.error(`saveAttendanceModel returned null for UserID: ${UserID}`);
      return res.status(500).json({
        success: false,
        message: "An error occurred, Please try again",
        data: null,
      });
    }

    const { ErrorCode, Message } = result;

    // Log the response
    logger.debug(
      JSON.stringify({
        API: "saveAttendance",
        REQUEST: { UserID, Latitude, Longitude, AttendanceType },
        RESPONSE: { success: ErrorCode === 0, message: Message },
      })
    );

    // Handle response based on error code
    if (ErrorCode === 0) {
      return res.status(200).json({
        success: true,
        message: Message,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: Message,
      });
    }
  } catch (error) {
    logger.error(error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred, Please try again",
      data: null,
    });
  }
};
