const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        id: Number,
        message: String
    },
    { timestamps: true }
);


const LandOwners = new Schema(
    {
        id: Number,
        name: String,
        alias: String,
        email: String
    },
);

// const LandOwners_Fields = new Schema(
//     {
//         id: Number,
//         owner: Link To LandOwner id,
//         fieldNamw: String,
//         fieldType: String,
//         fieldComments: String
//     },
// );
//
// const FieldTypes = new Schema(
//     {
//         id: Number,
//         FieldId: Link to LandOwners_Fields
//         FieldType: Link to fieldtype options,
//         fieldCategory: String,
//     },
// );
//
// const FieldAvailability = new Schema(
//     {
//         id: Number,
//         LandOwners_Fields: Link to LandOwners_Fields
//         Availability: Date Range,
//         fieldCategory: Link to FieldTypes,
//     },
// );



module.exports = mongoose.model("Data", DataSchema);
module.exports = mongoose.model("LandOwners", LandOwners);

