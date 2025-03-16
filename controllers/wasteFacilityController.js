import { insertWasteManagementFacilityModel } from "../models/wasteFacilityModel.js"

export const insertWasteFacility=async (req, res) => {
    try {
        const facilityData = req.body;

        // Validate required fields
        const requiredFields = [
            "StateID", "DistrictID", "BlockID", "AgencyName", "Address", "Phone",
            "Email", "WasteType", "WasteQuantityPerDay", "CollectionMethod",
            "FacilityLocation", "FacilitySize", "TechnologyUsed",
            "PollutionControlMeasures", "ExpectedStartDate", "PollutionControlConsent"
        ];
        
        for (let field of requiredFields) {
            if (!facilityData[field]) {
                return res.status(400).json({ success: false, message: `Missing required field: ${field}` });
            }
        }

        // Insert into database
        const result = await insertWasteManagementFacilityModel(facilityData);

        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        console.error("Controller error:", error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
}


