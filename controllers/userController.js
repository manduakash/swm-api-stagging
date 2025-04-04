import { createUserModel ,insertGrantAuthorizationModal} from "../models/userModel.js";
import logger from "../utils/logger.js";

export const createUser = async (req, res) => {
  try {
    const {
      Username,
      Password,
      FullName,
      UserTypeID,
      StateID,
      DistrictID,
      BlockID,
      GPID,
      CreatedBy,
    } = req.body; // Extract input from request body

    // Check if all required inputs are provided
    if (
      !(
        Username &&
        Password &&
        FullName &&
        UserTypeID &&
        StateID &&
        CreatedBy
      )
    ) {
      // Debug logging for invalid input
      logger.debug(
        JSON.stringify({
          API: "createUser",
          REQUEST: {
            Username,
            Password,
            FullName,
            UserTypeID,
            StateID,
            DistrictID,
            BlockID,
            GPID,
            CreatedBy,
          },
          RESPONSE: {
            success: false,
            message: "Invalid Input Parameters",
          },
        })
      );

      // Send response for missing input
      return res.status(400).json({
        success: false,
        message: "Invalid Input Parameter(s)",
        data: null,
      });
    }

    // Call model function to insert user
    const result = await createUserModel(
      Username,
      btoa(Password),
      FullName,
      UserTypeID,
      StateID,
      DistrictID,
      BlockID,
      GPID,
      CreatedBy
    );
console.log("result", result);

    if (result === 0) {
      // If user creation was successful
      logger.debug(
        JSON.stringify({
          API: "createUser",
          REQUEST: {
            Username,
            Password,
            FullName,
            UserTypeID,
            StateID,
            DistrictID,
            BlockID,
            GPID,
            CreatedBy,
          },
          RESPONSE: {
            success: true,
            message: "User created successfully",
          },
        })
      );

      return res.status(200).json({
        success: true,
        message: "User created successfully",
      });
    } else {
      // If user creation failed
      logger.debug(
        JSON.stringify({
          API: "createUser",
          REQUEST: {
            Username,
            Password,
            FullName,
            UserTypeID,
            StateID,
            DistrictID,
            BlockID,
            GPID,
            CreatedBy,
          },
          RESPONSE: {
            success: false,
            message: "Failed to create user",
          },
        })
      );

      return res.status(400).json({
        success: false,
        message: "Failed to create user",
      });
    }
  } catch (error) {
    // Log server error
    logger.error(error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred, Please try again",
      data: null,
    });
  }
};



export const insertGrantAuthorization = async (req, res) => {
  try {
    const {
      UserID ,
      NameOfApplicant ,
      WasteManagementFacilitieID ,
      AuthorizationNumber ,
      ValidityStartDate ,
      ValidityEndDate ,
      WasteManagementGuidelinesCompliance ,
      EnvironmentalSafetyRequirements ,
      ApprovingAuthorityName ,
      ApprovingAuthorityDesignation 
    } = req.body; // Extract input from request body

    // Check if all required inputs are provided
    if (
      !(
        UserID  &&
        NameOfApplicant  &&
        WasteManagementFacilitieID  &&
      
        ValidityStartDate  &&
        ValidityEndDate  &&
        WasteManagementGuidelinesCompliance  &&
        EnvironmentalSafetyRequirements  &&
        ApprovingAuthorityName &&
        ApprovingAuthorityDesignation 
      )
    ) {
      // Debug logging for invalid input
      logger.debug(
        JSON.stringify({
          API: "InsertGrantAuthorization",
          REQUEST: {
            UserID ,
            NameOfApplicant ,
            WasteManagementFacilitieID ,
            AuthorizationNumber ,
            ValidityStartDate ,
            ValidityEndDate ,
            WasteManagementGuidelinesCompliance ,
            EnvironmentalSafetyRequirements ,
            ApprovingAuthorityName ,
            ApprovingAuthorityDesignation 
          },
          RESPONSE: {
            success: false,
            message: "Invalid Input Parameters",
          },
        })
      );

      // Send response for missing input
      return res.status(400).json({
        success: false,
        message: "Invalid Input Parameter(s)",
        data: null,
      });
    }

    // Call model function to insert user
    const result = await insertGrantAuthorizationModal(
      UserID ,
      NameOfApplicant ,
      WasteManagementFacilitieID ,
      AuthorizationNumber ,
      ValidityStartDate ,
      ValidityEndDate ,
      WasteManagementGuidelinesCompliance ,
      EnvironmentalSafetyRequirements ,
      ApprovingAuthorityName ,
      ApprovingAuthorityDesignation 
    );
console.log("result",result);

    if (result === 0) {
      // If user creation was successful
      logger.debug(
        JSON.stringify({
          API: "InsertGrantAuthorization",
          REQUEST: {
            UserID ,
            NameOfApplicant ,
            WasteManagementFacilitieID ,
            AuthorizationNumber ,
            ValidityStartDate ,
            ValidityEndDate ,
            WasteManagementGuidelinesCompliance ,
            EnvironmentalSafetyRequirements ,
            ApprovingAuthorityName ,
            ApprovingAuthorityDesignation 
          },
          RESPONSE: {
            success: true,
            message: "User created successfully",
          },
        })
      );

      return res.status(200).json({
        success: true,
        message: "User created successfully",
      });
    } else {
      // If user creation failed
      logger.debug(
        JSON.stringify({
          API: "InsertGrantAuthorization",
          REQUEST: {
            UserID ,
            NameOfApplicant ,
            WasteManagementFacilitieID ,
            AuthorizationNumber ,
            ValidityStartDate ,
            ValidityEndDate ,
            WasteManagementGuidelinesCompliance ,
            EnvironmentalSafetyRequirements ,
            ApprovingAuthorityName ,
            ApprovingAuthorityDesignation 
          },
          RESPONSE: {
            success: false,
            message: "Failed to create user",
          },
        })
      );

      return res.status(400).json({
        success: false,
        message: "Failed to create user",
      });
    }
  } catch (error) {
    // Log server error
    logger.error(error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred, Please try again",
      data: null,
    });
  }
};



