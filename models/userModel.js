import pool from "../db.js";

export async function createUserModel(
  Username,
  PasswordHash,
  FullName,
  UserTypeID,
  StateID,
  DistrictID,
  BlockID,
  GPID,
  CreatedBy
) {
  try {
    // Use a query with the correct number of parameters
    const [rows] = await pool.query(
      "CALL CreateUser(?, ?, ?, ?, ?, ?, ?, ?, ?, @p_ErrorCode);",
      [
        Username,
        PasswordHash,
        FullName,
        UserTypeID,
        StateID,
        DistrictID,
        BlockID,
        GPID,
        CreatedBy
      ]
    );

    // Fetch the output parameter `@p_ErrorCode`
    const [[errorResult]] = await pool.query("SELECT @p_ErrorCode as ErrorCode");

    return errorResult.ErrorCode; // Return the error code
  } catch (e) {
    console.log(e.message);
    return null;
  }
}





export async function insertGrantAuthorizationModal(
    UserID,
    NameOfApplicant,
    WasteManagementFacilitieID,
    AuthorizationNumber,
    ValidityStartDate,
    ValidityEndDate,
    WasteManagementGuidelinesCompliance,
    EnvironmentalSafetyRequirements,
    ApprovingAuthorityName,
    ApprovingAuthorityDesignation
) {
    try {
        const [resultSets] = await pool.query(
            `CALL InsertGrantAuthorization(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
            [
                UserID,
                NameOfApplicant,
                WasteManagementFacilitieID,
                AuthorizationNumber,
                ValidityStartDate,
                ValidityEndDate,
                WasteManagementGuidelinesCompliance,
                EnvironmentalSafetyRequirements,
                ApprovingAuthorityName,
                ApprovingAuthorityDesignation
            ]
        );
        
        // Extract the first result set which contains ErrorCode
        const errorCode = resultSets[0][0]?.ErrorCode;
        console.log("errorCode",errorCode);
        
        return errorCode;
    } catch (error) {
        console.error("Error inserting grant authorization:", error.message);
        return null;
    }
}

