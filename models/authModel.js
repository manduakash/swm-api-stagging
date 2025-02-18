import pool from "../db.js";
import logger from "../utils/logger.js";

export async function userLoginModel(username, password) {
  try {
    const [rows] = await pool.query("CALL UserLogin(?, ?)", [
      username,
      password,
    ]);
    return rows[0];
  } catch (error) {
    logger.error(error.message);
    throw new Error("DB error: " + error.message);
  }
}

export async function userLogoutModel(UserID) {
  try {
    const [rows] = await pool.query("CALL UserLogout(?)", [UserID]);
    return rows[0];
  } catch (error) {
    logger.error(error.message);
    throw new Error("DB error: " + error.message);
  }
}
