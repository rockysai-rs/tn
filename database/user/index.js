import mongoose from "mongoose";

const UserSchema = new mongoose.schema({
  fullname: {type: String,required: true},
  email: {type: String,required:true},
  password: {type: String},
  address:[{detail:{type:String},for:{type:String}}],
  phonenumber:[{type:Number}]
});

export const UserModel = mongoose.model("Users",UserSchema);
