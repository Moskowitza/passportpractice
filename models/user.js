const mongoose = require("mongoose");
const passportlocalmongoose= require("passport-local-mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:String,
    passwod: String
})
UserSchema.plugin(passportlocalmongoose);

var User = mongoose.model("User", UserSchema);

module.exports = User;