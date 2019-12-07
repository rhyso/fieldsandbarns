const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527

const OwnersSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: String,
        alias: String,
        biography: String,
        email: String,
        created: {
            type: Date,
            default: Date.now
        },
    },
);

OwnersSchema.methods.combineName = function() {
    return this.firstName + this.lastName
}

module.exports = mongoose.model("Owners", OwnersSchema);



