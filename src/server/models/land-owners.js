const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const DataSchema = new Schema(
//     {
//         id: Number,
//         message: String
//     },
//     { timestamps: true }
// );
const LandOwners = new Schema(
    {
        id: Number,
        name: String,
        alias: String,
        email: String
    },
);

//
// const Owner = new Schema(
//     {
//         _id: Schema.Types.ObjectId,
//         name: String,
//         alias: String,
//         email: String,
//         fields: [{ type: Schema.Types.ObjectId, ref: 'Fields' }]
//     },
// );
//
//
// const Fields = new Schema(
//     {
//         _id: Schema.Types.ObjectId,
//         fields: [{ type: Schema.Types.ObjectId, ref: 'Owner' }],
//         name: String,
//         type: String,
//         comments: String
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



// module.exports = mongoose.model("Data", DataSchema);
module.exports = mongoose.model("LandOwners", LandOwners);


