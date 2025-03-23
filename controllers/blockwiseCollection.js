import {getBlockWiseWasteCollectionModel, getGPWiseWasteCollectionModel,getVillageWiseWasteCollectionModel, getGrantAuthorizationModel,} from '../models/blockwiseModel.js'


import logger from "../utils/logger.js";


export const getBlockWiseWasteCollection = async (req, res) => {
    try {
      const { StateID , DistrictID, ReportDate } = req.body; // get input from request
  
      // calling model method
      const result = await getBlockWiseWasteCollectionModel(
        StateID,
        DistrictID,
        ReportDate 
      );
  
      if (result) {
        // in inserted
        // debug logging
        logger.debug(
          JSON.stringify({
            API: "GetBlockWiseWasteCollection",
            REQUEST: {
              StateID,
              DistrictID,
              ReportDate 
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
            API: "GetBlockWiseWasteCollection",
            REQUEST: {
              StateID,
              DistrictID,
              ReportDate 
   
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



  export const getGPWiseWasteCollection = async (req, res) => {
    try {
      const { StateID  , DistrictID , BlockID ,ReportDate  } = req.body; // get input from request
  
      // calling model method
      const result = await getGPWiseWasteCollectionModel(
        StateID,
        DistrictID,
        BlockID,
        ReportDate 
      );
  
      if (result) {
        // in inserted
        // debug logging
        logger.debug(
          JSON.stringify({
            API: "GetGPWiseWasteCollection",
            REQUEST: {
              StateID,
              DistrictID,
              BlockID,
              ReportDate 
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
            API: "GetGPWiseWasteCollection",
            REQUEST: {
              StateID,
              DistrictID,
              BlockID,
              ReportDate 
   
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


  export const getVillageWiseWasteCollection = async (req, res) => {
    try {
      const { StateID  , DistrictID , BlockID ,GPID ,ReportDate  } = req.body; // get input from request
  
      // calling model method
      const result = await getVillageWiseWasteCollectionModel(
        StateID,
        DistrictID,
        BlockID,
        GPID ,
        ReportDate 
      );
  
      if (result) {
        // in inserted
        // debug logging
        logger.debug(
          JSON.stringify({
            API: "GetVillageWiseWasteCollection",
            REQUEST: {
              StateID,
              DistrictID,
              BlockID,
              GPID ,
              ReportDate 
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
            API: "GetVillageWiseWasteCollection",
            REQUEST: {
              StateID,
              DistrictID,
              BlockID,
              GPID ,
              ReportDate 
   
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



  export const getGrantAuthorization = async (req, res) => {
    try {
      const { WasteManagementFacilitieID  , UserID} = req.body; // get input from request
  
      // calling model method
      const result = await getGrantAuthorizationModel(
        WasteManagementFacilitieID ,
        UserID
        
      );
  
      if (result) {
        // in inserted
        // debug logging
        logger.debug(
          JSON.stringify({
            API: "GetGrantAuthorization",
            REQUEST: {
              WasteManagementFacilitieID ,
              UserID,
  
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
            API: "GetGrantAuthorization",
            REQUEST: {
              WasteManagementFacilitieID ,
              UserID
   
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
  