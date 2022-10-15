const mongoose=require("mongoose");
const tagschema = mongoose.Schema({
    name:String,
});

const Tag = mongoose.model("Tag", tagschema);
module.exports = Tag;