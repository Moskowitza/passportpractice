const mongoose = require("mongoose");
const passportlocalmongoose= require("passport-local-mongoose")

const Schea = mongoose.Schema;

const UserSchema = new Schema({
    username:String,
    passwod: String
});
User.plugin(passportlocalmongoose);

var User = mongoose.model("User", UserSchema);

module.exports = User;