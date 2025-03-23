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


export async function InsertAccidentReportModel(data) {
    try {
        const connection = await pool.getConnection();
        try {
            // Define an error code variable
            await connection.query(`SET @errorCode = 0;`);

            // Execute stored procedure with an OUT parameter using session variable
            await connection.query(
                `CALL InsertAccidentReport(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @errorCode);`,
                [
                    data.StateID,
                    data.DistrictID,
                    data.BlockID,
                    data.GPID,
                    data.AccidentDate,
                    data.WasteType,
                    data.AccidentCause,
                    data.EnvironmentalDamage,
                    data.ContainmentSteps,
                    data.FuturePrevention,
                    data.ReportingOfficerName,
                    data.ReportingOfficerDesignation
                ]
            );

            // Retrieve the error code from the session variable
            const [result] = await connection.query(`SELECT @errorCode AS ErrorCode;`);
            const errorCode = result[0]?.ErrorCode;

            if (errorCode === 0) {
                return { success: true, message: "Accident report inserted successfully" };
            } else {
                return { success: false, message: "Failed to insert accident report", errorCode };
            }
        } finally {
            connection.release(); // Release connection back to the pool
        }
    } catch (error) {
        console.error("Error inserting accident report:", error.message);
        return { success: false, message: "Database error", error: error.message };
    }
}



export async function InsertAnnualReportModel(data) {
    try {
        const connection = await pool.getConnection();
        try {
            // Initialize error code variable
            await connection.query(`SET @errorCode = 0;`);

            // Execute stored procedure with OUT parameter
            await connection.query(
                `CALL InsertAnnualReport(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @errorCode);`,
                [
                    data.StateID,
                    data.DistrictID,
                    data.BlockID,
                    data.GPID,
                    data.ULBName,
                    data.ContactPersonDetails,
                    data.WasteQuantityCollected,
                    data.WasteQuantitySegregated,
                    data.DisposalMethods,
                    data.WasteProcessingStatus,
                    data.WasteManagementIssues,
                    data.ImprovementSteps,
                    data.AuthoritySignature
                ]
            );

            // Retrieve the error code
            const [result] = await connection.query(`SELECT @errorCode AS ErrorCode;`);
            const errorCode = result[0]?.ErrorCode;

            if (errorCode === 0) {
                return { success: true, message: "Annual report inserted successfully" };
            } else {
                return { success: false, message: "Failed to insert annual report", errorCode };
            }
        } finally {
            connection.release(); // Release connection back to the pool
        }
    } catch (error) {
        console.error("Error inserting annual report:", error.message);
        return { success: false, message: "Database error", error: error.message };
    }
}




export async function InsertAnnualReportOperatorModel(data) {
    try {
        const connection = await pool.getConnection();
        try {
            // Initialize error code variable
            await connection.query(`SET @errorCode = 0;`);

            // Execute stored procedure with OUT parameter
            await connection.query(
                `CALL InsertAnnualReportOperator(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @errorCode);`,
                [
                    data.StateID,
                    data.DistrictID,
                    data.BlockID,
                    data.GPID,
                    data.FacilityName,
                    data.LocationContactDetails,
                    data.ProcessingFacilityType,
                    data.WasteHandledAnnually,
                    data.WasteProcessedType,
                    data.ProcessingTechnology,
                    data.PollutionControlMeasures,
                    data.EnvironmentalImpactReports,
                    data.AuthoritySignature
                ]
            );

            // Retrieve the error code
            const [result] = await connection.query(`SELECT @errorCode AS ErrorCode;`);
            const errorCode = result[0]?.ErrorCode;

            if (errorCode === 0) {
                return { success: true, message: "Annual report inserted successfully" };
            } else {
                return { success: false, message: "Failed to insert annual report", errorCode };
            }
        } finally {
            connection.release(); // Release connection back to the pool
        }
    } catch (error) {
        console.error("Error inserting annual report:", error.message);
        return { success: false, message: "Database error", error: error.message };
    }
}