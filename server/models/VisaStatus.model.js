const mongoose = require('mongoose');
const objectID = mongoose.Schema.Types.ObjectId;

const VisaStatusSchema = new mongoose.Schema({
    user_id: { 
        // reference userID? application ID? both?
        type: objectID, ref: "User", 
        required: [true, 'Visa status must be linked to a user ID']
    },
    application_id: {
        type: objectID, ref: 'Application',
        required: [true, 'Visa status must be linked to an application']
    },
    status: {
        type: String,
        enum: [ "pending", "rejected", "approved" ],
        required: [ true, "OPT status is required" ],
        default: "pending",
    },
    profileImgUrl: { type: String, required: false, default: null },
    driverLicenseImgUrl: { type: String, required: false, default: null },
    workAuthorizationImgUrl: { type: String, required: false, default: null },

}, {timestamps: true});

module.exports = VisaStatusSchema;
module.exports.VisaStatus = mongoose.model("VisaStatus", VisaStatusSchema);