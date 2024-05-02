import express from 'express'
import { Router } from 'express'
import db from '../db'
i
const editRouter = Router();
editRouter.use(express.json());

editRouter.put("/posts/:id", async(req, res)=>{

})

export default editRouter;