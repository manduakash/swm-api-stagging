import pool from "../db.js";

export async function insertPropertyModel(
  UniqueNumber,
  PropertyTypeID,
  PropertyName,
  PropertyAddress,
  StateID,
  DistrictID,
  BlockID,
  GPID,
  VillageID,
  PropertyNumber,
  LandMark,
  Latitude,
  Longitude,
  OwnerName,
  OwnerPhoneNumber,
  CollectionType
) {
  try {
    const [rows] = await pool.query(
      "CALL InsertProperty(?, ?, ?, ?, ?, ?,?,?, ?, ?, ?, ?, ?, ?, ?, ?);",
      [
        UniqueNumber,
        PropertyTypeID,
        PropertyName,
        PropertyAddress,
        StateID,
        DistrictID,
        BlockID,
        GPID,
        VillageID,
        PropertyNumber,
        LandMark,
        Latitude,
        Longitude,
        OwnerName,
        OwnerPhoneNumber,
        CollectionType,
      ]
    );

    return rows?.affectedRows;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}
