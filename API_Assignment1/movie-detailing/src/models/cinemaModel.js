const mongoose = require("mongoose");
const cinemaSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        location: {type: String, required: true},
        frequencyShown: {type: Number, required: true},
        attendance: {type: Number, required: true},
        revenue: {type: Number, required: true}
    },
    {
        timestamps: {required: true}
    }
);

const cinemaModel = mongoose.model("cinema", cinemaSchema);
module.exports = cinemaModel;