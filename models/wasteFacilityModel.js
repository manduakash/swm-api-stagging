import pool from "../db.js";

export async function insertWasteManagementFacilityModel(data) {
    try {
        const connection = await pool.getConnection();
        try {
            // Execute stored procedure
            await connection.query(
                `CALL InsertWasteManagementFacility(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @errorCode);`,
                [
                    data.StateID,
                    data.DistrictID,
                    data.BlockID,
                    data.GPID || null, // Allow NULL values
                    data.AgencyName,
                    data.Address,
                    data.Phone,
                    data.Email,
                    data.WasteType,
                    data.WasteQuantityPerDay,
                    data.CollectionMethod,
                    data.FacilityLocation,
                    data.FacilitySize,
                    data.TechnologyUsed,
                    data.PollutionControlMeasures,
                    data.ExpectedStartDate,
                    data.PollutionControlConsent,
                    data.AttachedDocuments
                ]
            );

            // Retrieve the error code
            const [result] = await connection.query(`SELECT @errorCode AS ErrorCode;`);
            const errorCode = result[0]?.ErrorCode;

            if (errorCode === 0) {
                return { success: true, message: "Facility inserted successfully" };
            } else {
                return { success: false, message: "Failed to insert facility", errorCode };
            }
        } finally {
            connection.release(); // Release connection back to the pool
        }
    } catch (error) {
        console.error("Error inserting waste management facility:", error.message);
        return { success: false, message: "Database error", error: error.message };
    }
}
