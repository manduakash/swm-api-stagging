import pool from "../db.js";



export async function getBlockWiseWasteCollectionModel(
    StateID ,
    DistrictID ,
    ReportDate 
  ) {
    try {
      const [[rows]] = await pool.query("CALL GetBlockWiseWasteCollection(?, ?, ?);", [
        StateID ,
        DistrictID ,
        ReportDate
      ]);
    
  
      return rows;
    } catch (e) {
      console.log(e.message);
      return null;
    }
  }


  export async function getGPWiseWasteCollectionModel(
    StateID ,
    DistrictID ,
    BlockID,
    ReportDate 
  ) {
    try {
      const [[rows]] = await pool.query("CALL GetGPWiseWasteCollection(?, ?, ?,?);", [
        StateID ,
        DistrictID ,
        BlockID,
        ReportDate
      ]);
    
  
      return rows;
    } catch (e) {
      console.log(e.message);
      return null;
    }
  }


  export async function getVillageWiseWasteCollectionModel(
    StateID ,
    DistrictID ,
    BlockID,
    GPID ,
    ReportDate 
  ) {
    try {
      const [[rows]] = await pool.query("CALL GetVillageWiseWasteCollection(?, ?, ?,?,?);", [
        StateID ,
        DistrictID ,
        BlockID,
        GPID ,
        ReportDate
      ]);
    
  
      return rows;
    } catch (e) {
      console.log(e.message);
      return null;
    }
  }