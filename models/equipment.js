var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");

var SALT_FACTOR = 10

var gunSchema = mongoose.Schema({
    description:{type: String, require:true},
    power:{type: Number, require:true},
    category:{type: String, require:true},
    ammo:{type: Boolean, require:true}
});
var Gun = mongoose.model("Equipment", gunSchema);
module.exports = Gun;