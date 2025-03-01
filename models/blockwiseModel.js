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