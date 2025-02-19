import { insertPropertyModel } from "../models/propertyModel.js";
import logger from "../utils/logger.js";

export const insertProperty = async (req, res) => {
  try {
    const {
      PropertyTypeID,
      PropertyName,
      PropertyAddress,
      StateID,
      DistrictID,
      BlockID,
      GPID,
      PropertyNumber,
      LandMark,
      Latitude,
      Longitude,
      OwnerName,
      OwnerPhoneNumber,
      CollectionType,
    } = req.body; // get input from request

    if (
      !(
        PropertyTypeID &&
        PropertyName &&
        PropertyAddress &&
        StateID &&
        DistrictID &&
        BlockID &&
        GPID &&
        PropertyNumber &&
        LandMark &&
        Latitude &&
        Longitude &&
        OwnerName &&
        OwnerPhoneNumber &&
        CollectionType
      )
    ) {
      // if input not provided
      logger.debug(
        // debug logging
        JSON.stringify({
          API: "insertProperty",
          REQUEST: {
            PropertyTypeID,
            PropertyName,
            PropertyAddress,
            StateID,
            DistrictID,
            BlockID,
            GPID,
            PropertyNumber,
            LandMark,
            Latitude,
            Longitude,
            OwnerName,
            OwnerPhoneNumber,
            CollectionType,
          },
          RESPONSE: {
            success: false,
            message: "Invalid Input ",
          },
        })
      );

      // sending api response to client
      return res.status(400).json({
        success: false,
        message: "Invalid Input Parameter(s)",
        data: null,
      });
    }

    // calling model method
    const result = await insertPropertyModel(
      PropertyTypeID,
      PropertyName,
      PropertyAddress,
      StateID,
      DistrictID,
      BlockID,
      GPID,
      PropertyNumber,
      LandMark,
      Latitude,
      Longitude,
      OwnerName,
      OwnerPhoneNumber,
      CollectionType
    );

    if (result) {
      // in inserted
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "insertProperty",
          REQUEST: {
            PropertyTypeID,
            PropertyName,
            PropertyAddress,
            StateID,
            DistrictID,
            BlockID,
            GPID,
            PropertyNumber,
            LandMark,
            Latitude,
            Longitude,
            OwnerName,
            OwnerPhoneNumber,
            CollectionType,
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
     // if data not inserted
     logger.debug(
        JSON.stringify({
          API: "insertProperty",
          REQUEST: {
            PropertyTypeID,
            PropertyName,
            PropertyAddress,
            StateID,
            DistrictID,
            BlockID,
            GPID,
            PropertyNumber,
            LandMark,
            Latitude,
            Longitude,
            OwnerName,
            OwnerPhoneNumber,
            CollectionType,
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
