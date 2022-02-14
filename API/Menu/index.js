import express from "express";

import {MenuModel,ImageModel} from "../..database/allModels";

const Router = express.Router();

/*
Route     /list
Des       Get menu based on id
Params   -id
Access   Public
Method   GET
*/

Router.get("/list/:id",async(req,res)=>{
  try {
      const {_id} = req.params;
      const menus = await MenuModel.findone({_id});
      returm res.json({menus});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});

/*
Route     /image
Des       Get image of menu details based on id
Params   _id
Access   Public
Method   GET
*/

Router.get("/image/:_id",async(req,res)=>{
  try {
      const {_id} = req.params;
      const menus = await ImageModel.findone({_id});
      returm res.json({shops});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});

 
export default Router;
