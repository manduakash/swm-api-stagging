import pool from "../db.js";

export async function insertWasteCollectionModel(
  UniqueNumber,
  UserID,
  WasteType,
  WasteAmount,
  Photo,
  Remarks,
) {
  try {
    const [rows] = await pool.query("CALL InsertWasteCollection(?, ?, ?, ?, ?, ?);", [
      UniqueNumber,
      UserID,
      WasteType,
      WasteAmount,
      Photo,
      Remarks,
    ]);

    return rows?.affectedRows;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}



export async function getWasteManagementDashboardModel(
  StateID ,
  DistrictID ,
  BlockID ,
  GPID 
) {
  try {
    const [[rows]] = await pool.query("CALL GetWasteManagementDashboard(?, ?, ?, ?);", [
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
export async function getWasteCollectionSummaryModel(
  StateID ,
  DistrictID ,
  BlockID ,
  GPID 
) {
  try {
    const [[rows]] = await pool.query("CALL GetWasteCollectionSummary(?, ?, ?, ?);", [
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

export async function getPropertiesWithWasteCollectionModel(
  StateID ,
  DistrictID ,
  BlockID ,
  GPID ,
  StartDate,
  EndDate 
) {
  try {
    const [[rows]] = await pool.query("CALL GetPropertiesWithWasteCollection(?, ?, ?, ?,?,?);", [
      StateID ,
      DistrictID ,
      BlockID ,
      GPID ,
      StartDate,
      EndDate
    ]);
  

    return rows;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

export async function getEmployeeAttendanceModel(
  Status
) {
  try {
    const [[rows]] = await pool.query("CALL GetEmployeeAttendance(?);", [
      Status
    ]);
  

    return rows;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

export async function getWasteCollectionDataModel(
  StateID ,
  DistrictID ,
  BlockID ,
  GPID ,
  WasteType 
) {
  try {
    const [[rows]] = await pool.query("CALL GetWasteCollectionData(?, ?, ?, ?,?);", [
      StateID ,
      DistrictID ,
      BlockID ,
      GPID ,
      WasteType 
    ]);
  

    return rows;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}


export async function getWasteCollectionStatsModel(
  StateID ,
  DistrictID ,
  BlockID ,
  GPID 
) {
  try {
    const [[rows]] = await pool.query("CALL GetWasteCollectionStats(?, ?, ?, ?);", [
      StateID ,
      DistrictID ,
      BlockID ,
      GPID 
    ]);
  

    return rows;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

export async function getWasteManagementFacilitiesModel(StateID, DistrictID, BlockID) {
  try {
    const [results] = await pool.query("CALL GetWasteManagementFacilities(?, ?, ?);", [
      StateID,
      DistrictID,
      BlockID,
    ]);
    console.log("StateID",StateID)
    console.log("DistrictID",DistrictID)
    console.log("BlockID",BlockID)
    console.log("results",results);
    
    if (results && Array.isArray(results) && results.length > 0) {
      return results[0]; 
    } else {
      return []; 
    }
  } catch (e) {
    console.error("Error in fetching waste management facilities:", e.message);
    return null;
  }
}


