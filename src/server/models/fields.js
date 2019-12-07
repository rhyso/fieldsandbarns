const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//https://stackoverflow.com/questions/34985846/mongoose-document-references-with-a-one-to-many-relationship

const Fields = new Schema(
    {
        owner: { //store the object id of the owner here
            type: Schema.Types.ObjectId,
            ref: 'Owners'
        },
        name: String,
        type: String,
        comments: String,
        image: Buffer,
        // ratings: [
        //     {
        //         summary: String,
        //         detail: String,
        //         numberOfStars: Number,
        //         created: {
        //             type: Date,
        //             default: Date.now
        //         }
        //     }
        // ],
    },
);

module.exports = mongoose.model("Fields", Fields);



