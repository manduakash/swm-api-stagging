import pool from "../db.js";
import logger from "../utils/logger.js";

export async function getDistrictsByStateModel(state_id) {
  try {
    const [rows] = await pool.query("CALL GetDistrictsByState(?)", [state_id]);
    return rows[0];
  } catch (error) {
    logger.error(error.message);
    throw new Error("DB error: " + error.message);
  }
}

export async function getBlocksByDistrictModel(district_id) {
  try {
    const [rows] = await pool.query("CALL GetBlocksByDistrict(?)", [district_id]);
    return rows[0];
  } catch (error) {
    logger.error(error.message);
    throw new Error("DB error: " + error.message);
  }
}

export async function getGPsByBlockModel(block_id) {
  try {
    const [rows] = await pool.query("CALL GetGPsByBlock(?)", [block_id]);
    return rows[0];
  } catch (error) {
    logger.error(error.message);
    throw new Error("DB error: " + error.message);
  }
}

export async function getVillagesByGPModel(gp_id) {
  try {
    const [rows] = await pool.query("CALL GetVillagesByGP(?)", [gp_id]);
    return rows[0];
  } catch (error) {
    logger.error(error.message);
    throw new Error("DB error: " + error.message);
  }
}

export async function getAllPropertyTypesModel() {
  try {
    const [rows] = await pool.query("CALL GetAllPropertyTypes()");
    return rows[0];
  } catch (error) {
    logger.error(error.message);
    throw new Error("DB error: " + error.message);
  }
}
