import express from "express";
import bcrypt from "bcryptjs";

//models
import {UserModel} from "../../database/user";

//validations
import{ValidationSignup,ValidationSignin} from "../../validation/auth";

const Router = express.Router();

/*
route   /signup
des     signup using email and password
params  none
access  public
method  post
*/


Router.post("/signup",async(req,res)=> {
  try{
    await ValidationSignup(req.body.credentials);
    const{email,password,fullname,phoneNumber} = req.body.credentials;

    const checkUserByEmail= await UserModel.findOne({email});
    const checkUserByPhone= await UserModel.findOne({phone});

    if(checkUserByEmail || checkUserByPhone){
      return res.json({error:"user alredy exists!!!"});
    }
// hashing password
    const bcryptSalt = await bcrypt.gensalt(8);
    const hashedPassword = await bcrypt.hash(password,bcryptSalt);

//save to DB
await UserModel.create({
  ...req.body.credentials,
  password:hashedPassword
});

//JWT Token
const token = jwt.sign({user:{fullname,email}},"TNApp");


return res.status(200).json({token,status:"success"}):
  }catch(error){
    return res.status(500).json({error:console.error(.message)});
  }
})

/*
Route   /signin
Des     signin using email and password
Params  none
Access  public
Method  Post
*/

Router.post("/signin", async(req,res) => {
  try {
    await ValidationSignin(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(
      req.body.credentials
    );
    const token = user.generateJwtToken();
    return res.status(200).json({token,status:"success"}):
      }catch(error){
        return res.status(500).json({error:console.error(.message)});
      }
})
