const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    userid:{
        type:mongoose.Schema.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "please provide a contact email"]
    },
    phone: {
        type: String,
        required: [true, "please provide a contact phone number"]
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("contacts", contactSchema);