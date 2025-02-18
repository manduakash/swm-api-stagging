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
