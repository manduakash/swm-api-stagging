import pool from "../db.js";

export async function insertWasteCollectionModel(
  UniqueNumber,
  UserID,
  WasteType,
  WasteAmount
) {
  try {
    const [rows] = await pool.query("CALL InsertWasteCollection(?, ?, ?, ?);", [
      UniqueNumber,
      UserID,
      WasteType,
      WasteAmount,
    ]);

    return rows?.affectedRows;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}
