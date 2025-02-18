import { insertWasteCollectionModel } from "../models/wasteCollectionModel.js";
import logger from "../utils/logger.js";

export const insertWasteCollection = async (req, res) => {
  try {
    const { UniqueNumber, UserID, WasteType, WasteAmount } = req.body; // get input from request

    if (!(UniqueNumber && UserID && WasteType && WasteAmount)) {
      // if input not provided
      logger.debug(
        // debug logging
        JSON.stringify({
          API: "insertWasteCollection",
          REQUEST: {
            UniqueNumber,
            UserID,
            WasteType,
            WasteAmount,
          },
          RESPONSE: {
            success: false,
            message: "Invalid Input ",
          },
        })
      );

      // sending api response to client
      return res.status(400).json({
        success: true,
        message: "Invalid Input Parameter(s)",
        data: null,
      });
    }

    // calling model method
    const result = await insertWasteCollectionModel(
      UniqueNumber,
      UserID,
      WasteType,
      WasteAmount
    );

    if (result) {
      // in inserted
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "insertProperty",
          REQUEST: {
            UniqueNumber,
            UserID,
            WasteType,
            WasteAmount,
          },
          RESPONSE: {
            success: false,
            message: "Data saved successfully",
          },
        })
      );

      // sending api response to client
      res.status(200).json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "insertProperty",
          REQUEST: {
            UniqueNumber,
            UserID,
            WasteType,
            WasteAmount,
          },
          RESPONSE: {
            success: false,
            message: "Failed to save data",
          },
        })
      );
      return res.status(400).json({
        success: false,
        message: "Failed to save data",
      });
    }
  } catch (error) {
    // error logging
    logger.error(error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred, Please try again",
      data: null,
    });
  }
};
