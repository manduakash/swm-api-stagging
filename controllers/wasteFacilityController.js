import { insertWasteManagementFacilityModel , InsertAccidentReportModel, InsertAnnualReportModel , InsertAnnualReportOperatorModel} from "../models/wasteFacilityModel.js"

export const insertWasteFacility = async (req, res) => {
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


export const InsertAccidentReport = async (req, res) => {
    try {
        const facilityData = req.body;

        // Validate required fields
        const requiredFields = [
            "StateID",
            "DistrictID",
            "BlockID",
            "GPID",
            "AccidentDate",
            "WasteType",
            "AccidentCause",
            "EnvironmentalDamage",
            "ContainmentSteps",
            "FuturePrevention",
            "ReportingOfficerName",
            "ReportingOfficerDesignation"
        ];

        for (let field of requiredFields) {
            if (!facilityData[field]) {
                return res.status(400).json({ success: false, message: `Missing required field: ${field}` });
            }
        }

        // Insert into database
        const result = await InsertAccidentReportModel(facilityData);

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


export const InsertAnnualReport = async (req, res) => {
    try {
        const reportData = req.body;

        // Validate required fields
        const requiredFields = [
            "StateID",
            "DistrictID",
            "BlockID",
            "GPID",
            "ULBName",
            "ContactPersonDetails",
            "WasteQuantityCollected",
            "WasteQuantitySegregated",
            "DisposalMethods",
            "WasteProcessingStatus",
            "WasteManagementIssues",
            "ImprovementSteps",
            "AuthoritySignature"
        ];

        for (let field of requiredFields) {
            if (!reportData[field]) {
                return res.status(400).json({ success: false, message: `Missing required field: ${field}` });
            }
        }

        // Insert into database
        const result = await InsertAnnualReportModel(reportData);

        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        console.error("Controller error:", error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};




export const InsertAnnualReportOperator = async (req, res) => {
    try {
        const reportData = req.body;

        // Validate required fields
        const requiredFields = [
            "StateID",
            "DistrictID",
            "BlockID",
            "GPID",
            "FacilityName",
            "LocationContactDetails",
            "ProcessingFacilityType",
            "WasteHandledAnnually",
            "WasteProcessedType",
            "ProcessingTechnology",
            "PollutionControlMeasures",
            "EnvironmentalImpactReports",
            "AuthoritySignature"
        ];

        for (let field of requiredFields) {
            if (!reportData[field]) {
                return res.status(400).json({ success: false, message: `Missing required field: ${field}` });
            }
        }

        // Insert into database
        const result = await InsertAnnualReportOperatorModel(reportData);

        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        console.error("Controller error:", error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};