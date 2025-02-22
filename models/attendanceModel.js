import pool from "../db.js";

export async function saveAttendanceModel(
  UserID,
  Latitude,
  Longitude,
  AttendanceType
) {
  try {
    // Use a query with the correct number of parameters
    const [rows] = await pool.query(
      "CALL SaveAttendance(?, ?, ?, ?, @p_ErrorCode, @p_Message);",
      [UserID, Latitude, Longitude, AttendanceType]
    );

    // Fetch the output parameter `@p_ErrorCode`
    const [[errorResult]] = await pool.query(
      "SELECT @p_ErrorCode as ErrorCode and @p_Message as Message;"
    );

    return (
      { ErrorCode: errorResult.ErrorCode, Message: errorResult.Message } || null
    ); // Return the error code and message
  } catch (e) {
    console.log(e.message);
    return null;
  }
}
