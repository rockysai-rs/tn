import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  provision:{types:mongoose.Types.ObjectId,ref:"Provision"},
  shop:{types:mongoose.Types.ObjectId,ref:"Shop"},
  user:{types:mongoose.Types.ObjectId,ref:"Users"},
  rating:{type:Number,required:true},
  reviewText:{type:String,required:true},
  isShopReview:Boolean,
  isProvisionReview:Boolean,
  photos:[{
    type:mongoose.Types.ObjectId,
    ref:"Images"
  }]
},
{
  timestamps:true
});

export const ReviewModel = mongoose.model("Review",ReviewSchema);
