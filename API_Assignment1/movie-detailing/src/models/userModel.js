const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        middleName: {type: String, required: false}
    },
    {
        timestamps: {required: true}
    }
);

const userModels = mongoose.model("user", userSchema);
module.exports = userModels;