import {
    getAllPropertyTypesModel,
  getAllUserTypesModel,
  getBlocksByDistrictModel,
  getDistrictsByStateModel,
  getGPsByBlockModel,
  getVillagesByGPModel,
} from "../models/masterModel.js";
import logger from "../utils/logger.js";

export const getDistrictsByState = async (req, res) => {
  try {
    const { state_id } = req.body; // get input from request

    if (!state_id) {
      // if input not provided
      logger.debug(
        // debug logging
        JSON.stringify({
          API: "getDistrictsByState",
          REQUEST: { state_id },
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
    const rows = await getDistrictsByStateModel(state_id);

    // checking if the record is empty
    if (!rows || rows?.length == 0) {
      return res.status(400).json({
        success: false,
        message: "No record(s) found",
        data: [],
      });
    }

    if (rows !== undefined && rows?.length !== 0) {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "getDistrictByState",
          REQUEST: { state_id },
          RESPONSE: {
            success: false,
            message: "Data fetched successfully",
            data: rows,
          },
        })
      );

      // sending api response to client
      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: rows,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "No record(s) found",
        data: [],
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

export const getBlocksByDistrict = async (req, res) => {
  try {
    const { district_id } = req.body; // get input from request

    if (!district_id) {
      // if input not provided
      logger.debug(
        // debug logging
        JSON.stringify({
          API: "getBlocksByDistrict",
          REQUEST: { district_id },
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
    const rows = await getBlocksByDistrictModel(district_id);

    if (rows !== undefined && rows?.length !== 0) {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "getBlocksByDistrict",
          REQUEST: { district_id },
          RESPONSE: {
            success: false,
            message: "Data fetched successfully",
            data: rows,
          },
        })
      );

      // sending api response to client
      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: rows,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "No record(s) found",
        data: [],
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

export const getGPsByBlock = async (req, res) => {
  try {
    const { block_id } = req.body; // get input from request

    if (!block_id) {
      // if input not provided
      logger.debug(
        // debug logging
        JSON.stringify({
          API: "getGPsByBlock",
          REQUEST: { block_id },
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
    const rows = await getGPsByBlockModel(block_id);

    if (rows !== undefined && rows?.length !== 0) {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "getGPsByBlock",
          REQUEST: { block_id },
          RESPONSE: {
            success: false,
            message: "Data fetched successfully",
            data: rows,
          },
        })
      );

      // sending api response to client
      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: rows,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "No record(s) found",
        data: [],
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

export const getVillagesByGP = async (req, res) => {
  try {
    const { gp_id } = req.body; // get input from request

    if (!gp_id) {
      // if input not provided
      logger.debug(
        // debug logging
        JSON.stringify({
          API: "getVillagesByGP",
          REQUEST: { gp_id },
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
    const rows = await getVillagesByGPModel(gp_id);

    if (rows !== undefined && rows?.length !== 0) {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "getVillagesByGP",
          REQUEST: { gp_id },
          RESPONSE: {
            success: false,
            message: "Data fetched successfully",
            data: rows,
          },
        })
      );

      // sending api response to client
      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: rows,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "No record(s) found",
        data: [],
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

export const getAllPropertyTypes = async (req, res) => {
  try {

    // calling model method
    const rows = await getAllPropertyTypesModel();

    if (rows !== undefined && rows?.length !== 0) {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "getAllPropertyTypes",
          REQUEST: { },
          RESPONSE: {
            success: false,
            message: "Data fetched successfully",
            data: rows,
          },
        })
      );

      // sending api response to client
      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: rows,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "No record(s) found",
        data: [],
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

export const getAllUserTypes = async (req, res) => {
  try {

    // calling model method
    const rows = await getAllUserTypesModel();

    if (rows !== undefined && rows?.length !== 0) {
      // debug logging
      logger.debug(
        JSON.stringify({
          API: "getAllUserTypes",
          REQUEST: { },
          RESPONSE: {
            success: false,
            message: "Data fetched successfully",
            data: rows,
          },
        })
      );

      // sending api response to client
      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        data: rows,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "No record(s) found",
        data: [],
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
