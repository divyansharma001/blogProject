import express from "express";
import { Router } from "express";
import db from "../db.js";

const postsRouter = Router();

postsRouter.use(express.json());

postsRouter.post((req,res)=>{
    
})

