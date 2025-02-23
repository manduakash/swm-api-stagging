import {
  insertWasteCollectionModel,
  getWasteManagementDashboardModel,
  getWasteCollectionSummaryModel,
  getPropertiesWithWasteCollectionModel,
  getEmployeeAttendanceModel,
  getWasteCollectionDataModel,
} from "../models/wasteCollectionModel.js";
import logger from "../utils/logger.js";

export const insertWasteCollection = async (req, res) => {
  try {
    const { UniqueNumber, UserID, WasteType, WasteAmount, Photo, Remarks } =
      req.body; // get input from request

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
            Photo,
            Remarks,
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
    const result = await insertWasteCollectionModel(
      UniqueNumber,
      UserID,
      WasteType,
      WasteAmount,
      Photo,
      Remarks
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
            Photo,
            Remarks,
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
            Photo,
            Remarks,
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

export const getWasteManagementDashboard = async (req, res) => {
  try {
    const { StateID, DistrictID, BlockID, GPID } = req.body; // get input from request

    // calling model method for waste management data
    const result = await getWasteManagementDashboardModel(
      StateID,
      DistrictID,
      BlockID,
      GPID
    );

    if (result) {
      // debug logging for success scenario
      logger.debug(
        JSON.stringify({
          API: "GetWasteManagementDashboard",
          REQUEST: {
            StateID,
            DistrictID,
            BlockID,
            GPID,
          },
          RESPONSE: {
            success: true,
            message: "Data fetched successfully",
          },
        })
      );

      // calling model method for chart data
      const chartData = await getWasteCollectionSummaryModel(
        StateID,
        DistrictID,
        BlockID,
        GPID
      );

      // sending api response to client
      return res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: {
          dashboard: result[0],        // First data model
          chartData: chartData[0],     // Chart data model
        },
      });
    } else {
      // debug logging for no result scenario
      logger.debug(
        JSON.stringify({
          API: "GetWasteManagementDashboard",
          REQUEST: {
            StateID,
            DistrictID,
            BlockID,
            GPID,
          },
          RESPONSE: {
            success: false,
            message: "Failed to fetch data",
          },
        })
      );
      return res.status(400).json({
        success: false,
        message: "No record found",
        data: [],
      });
    }
    
  } catch (error) {
    // error logging
    logger.error(error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred, Please try again",
      data: [],
    });
  }
};

export const getPropertiesWithWasteCollection = async (req, res) => {
  try {
    const { StateID, DistrictID, BlockID, GPID,StartDate ,EndDate  } = req.body; // get input from request

    // calling model method
    const result = await getPropertiesWithWasteCollectionModel(
      StateID,
      DistrictID,
      BlockID,
      GPID,
      StartDate,
      EndDate
    );

    if (result) {
      // in inserted
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "GetWasteManagementDashboard",
          REQUEST: {
            StateID,
            DistrictID,
            BlockID,
            GPID,
            StartDate,
            EndDate
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
        message: "Data fetched successfully",
        data: result || [],
      });
    } else {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "GetWasteManagementDashboard",
          REQUEST: {
            StateID,
            DistrictID,
            BlockID,
            GPID,
            StartDate,
            EndDate
          },
          RESPONSE: {
            success: false,
            message: "Failed to save data",
          },
        })
      );
      return res.status(400).json({
        success: false,
        message: "No record found",
        data: [],
      });
    }
  } catch (error) {
    // error logging
    logger.error(error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred, Please try again",
      data: [],
    });
  }
};

export const getEmployeeAttendance = async (req, res) => {
  try {
    const {Status} = req.body; // get input from request

    // calling model method
    const result = await  getEmployeeAttendanceModel(
      Status
    );

    if (result) {
      // in inserted
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "GetEmployeeAttendance",
          REQUEST: {
            Status
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
        message: "Data fetched successfully",
        data: result || [],
      });
    } else {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "GetEmployeeAttendance",
          REQUEST: {
            Status
          },
          RESPONSE: {
            success: false,
            message: "Failed to save data",
          },
        })
      );
      return res.status(400).json({
        success: false,
        message: "No record found",
        data: [],
      });
    }
  } catch (error) {
    // error logging
    logger.error(error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred, Please try again",
      data: [],
    });
  }
};



export const getWasteCollectionData = async (req, res) => {
  try {
    const { StateID, DistrictID, BlockID, GPID, WasteType} = req.body; // get input from request

    // calling model method
    const result = await getWasteCollectionDataModel(
      StateID,
      DistrictID,
      BlockID,
      GPID,
      WasteType 
    );

    if (result) {
      // in inserted
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "GetWasteCollectionData",
          REQUEST: {
            StateID,
            DistrictID,
            BlockID,
            GPID,
            WasteType 
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
        message: "Data fetched successfully",
        data: result || [],
      });
    } else {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "GetWasteCollectionData",
          REQUEST: {
            StateID,
            DistrictID,
            BlockID,
            GPID,
            WasteType 
          },
          RESPONSE: {
            success: false,
            message: "Failed to save data",
          },
        })
      );
      return res.status(400).json({
        success: false,
        message: "No record found",
        data: [],
      });
    }
  } catch (error) {
    // error logging
    logger.error(error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred, Please try again",
      data: [],
    });
  }
};