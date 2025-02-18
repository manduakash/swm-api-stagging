import pool from "../db.js";

export async function insertPropertyModel(
  PropertyTypeID,
  PropertyName,
  PropertyAddress,
  StateID,
  DistrictID,
  BlockID,
  GPID,
  PropertyNumber,
  LandMark,
  Latitude,
  Longitude,
  OwnerName,
  OwnerPhoneNumber,
  CollectionType
) {
  const [rows] = await pool.query(
    "CALL InsertProperty(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
    [
      PropertyTypeID,
      PropertyName,
      PropertyAddress,
      StateID,
      DistrictID,
      BlockID,
      GPID,
      PropertyNumber,
      LandMark,
      Latitude,
      Longitude,
      OwnerName,
      OwnerPhoneNumber,
      CollectionType,
    ]
  );

  console.log("rows", rows)
  return rows;
}
