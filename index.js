import express from "express";
import cors from "cors";
import helmet from "helmet";

const tn = express();

tn.use(express.json());
tn.use(express.urlencoded({extended: false}));
tn.use(helmet());
tn.use(cors());

tn.get("/",(req,res) => res.json({message:"setup success"}));


tn.listen(4000, () => console.log("server is up and running"));
