import {getBlockWiseWasteCollectionModel} from '../models/blockwiseModel.js'


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