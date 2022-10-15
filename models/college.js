const mongoose = require('mongoose');
const collegeSchema = mongoose.Schema({
    name: String,
    domain: String,
    courses: [{
        name: String,
        length: Number
    }]
}, {timestamps: true});

const College = mongoose.model("College", collegeSchema);
module.exports = College