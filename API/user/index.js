import express from "express";

import {UserModel} from "../..database/allModels";

const Router = express.Router();

/*
Route     /
Des       Get an user data
Params   _id
Access   Public
Method   GET
*/

Router.get("/_id",async(req,res)=>{
  try {
     const {_id} = req.params;
     const getUser = awake UserModel.findById(_id);
     return res.json({user:getuser});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});


/*
Route     /Update
Des       Update an user data
Params   _id
Access   Public
Method   PUT
*/

Router.put("/update/:_userid",async(req,res)=>{
  try {
     const {userId} = req.params;
     const {userData} = req.body;
     const updateUserData = await UserModel.findByIdAndUpdate(
       userId,
       {
         $set: userData
       },
       {new: true}
     );

     return res.json({user:updateUserData});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});

export default Router;
