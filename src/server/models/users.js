const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var validateDepartureData = function (val) {
    if( val >= Date.now()){
     return true;
    }else{
        return false
    }
 }

 
const User = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            pattern : "@gmail\.com$",
            description: "must be a string and match the regular expression pattern"
        },

        arrivalDate:{
            type:String,
            required:true
        },

        departureDate:{
            type:String,
            required:true,
        }
    },
);



// size: {
//     type: [String],
//     required: true,
//     enum: ['large', 'small', 'medium', 'mini']
// },
module.exports = mongoose.model("User", User);


