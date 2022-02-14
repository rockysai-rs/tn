import express from "express";

import {ProvisionModel} from "../..database/allModels";
import {ValidateShopId,ValidateCategory} from "../..validation/provision";

const Router = express.Router();

/*
Route     /
Des       Get all the provision based on shop
Params   _id
Access   Public
Method   GET
*/

Router.get("/:_id",async(req,res)=>{
  try {
      await ValidateShopId(req.params);
      const {_id} = req.params;
      const parameters = await ProvisionModel.find({shop: _id});
      returm res.json({provisions});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});

/*
Route     /
Des       Get all the provision based on shop
Params   category
Access   Public
Method   GET
*/

Router.get("/r/:category",async(req,res)=> {
  try {
    await ValidateCategory(req.params);
    const {category}= req.params;
    const provisions = await ProvisionModel.find({
      category: {$regex: category,$options:"i"}
    });
    return res.json({privisions});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});

export default Router;
