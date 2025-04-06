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
      "CALL InsertProperty_v1(?, ?, ?, ?, ?, ?,?,?, ?, ?, ?, ?, ?, ?, ?, ?, @ErrorCode);",
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
    
    const [[errorResult]] = await pool.query("SELECT @ErrorCode as ErrorCode");
    
    console.log(errorResult.ErrorCode)
    return errorResult.ErrorCode; // Return the error code
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

export async function getPropertyByUniqueNumberModel(UniqueNumber) {
  try {
    const [[rows]] = await pool.query("CALL GetPropertyByUniqueNumber(?);", [
      UniqueNumber,
    ]);

    return rows;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}



export async function getPropertiesModel(
  StateID ,
  DistrictID ,
  BlockID ,
  GPID 
) {
  try {
    const [[rows]] = await pool.query("CALL GetProperties(?, ?, ?, ?);", [
      StateID ,
      DistrictID ,
      BlockID ,
      GPID ,
    ]);
  

    return rows;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}
