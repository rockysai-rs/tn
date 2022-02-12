import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
  name:{type:String,required:true},
  city:{type:String,required:true},
  address:{type:String,required:true},
  maplocation:{type:String,required:true},
  shopTimings:String,
  contactNumber: Number,
  website: String,
  menuImages:{
    type:mongoose.Types.ObjectId,
    ref:"Images"
  },
  menu:{
    type:mongoose.Types.ObjectId,
    ref:"Menus"
  },
  review:[{type:mongoose.Types.ObjectId,ref:"reviews"}],
  photos:{types:mongoose.Types.ObjectId,ref:"Images"}
},
{
  timestamps:true
});

export const ShopModel = mongoose.model("Shops",ShopSchema);
