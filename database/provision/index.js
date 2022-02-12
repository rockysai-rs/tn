import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name:{type:String,required:true},
  description:{type:String,required: true},
  photos:{
    type:mongoose.Types.ObjectId,
    ref:"Images"
  },
  price:{type:Number,default:100,required:true},
  addOns:[
    {
      type:mongoose.Types.ObjectId,
      ref:"provisions"
    }
  ],
  branch:{
    type:mongoose.Type.ObjectId,
    ref:"branch",
    required: true
  }
},
{
  timestamps: true
});

export const FoodModel = mongoose.model("provisions",FoodSchema);
