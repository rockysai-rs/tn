import express from "express";

import {ShopModel} from "../..database/allModels";
import {ValidateShopCity,ValidateShopSearchString} from "../../validation/shop";
import {ValidateShopId} from "../../validation/provision";

const Router = express.Router();

/*
Route     /
Des       Get all the shop details
Params   None
Access   Public
Method   GET
*/

Router.get("/",async(req,res)=>{
  try {
      await ValidateShopCity(req.query);
      const {city} = req.query;
      const shops = await ShopModel.find({city});
      returm res.json({shops});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});

/*
Route     /
Des       Get a particular shop details based on id
Params   _id
Access   Public
Method   GET
*/

Router.get("/:-id",async(req,res)=>{
  try {
      await ValidateShopId(req.params);
      const {_id} = req.params;
      const shop = await ShopModel.findone({_id});
      returm res.json({shops});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});

/*
Route     /Search
Des       Get a particular shop details based on id
Params   searchString
Access   Public
Method   GET
*/

Router.get("/search",async(req,res)=>{
  try {
      await ValidateShopSearchString(req.body);
      const {searchString} = req.body;
      const shops = await ShopModel.find({
        name:{$regex: searchString, $options: "i"}
      });
      returm res.json({shops});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});

export default Router;
