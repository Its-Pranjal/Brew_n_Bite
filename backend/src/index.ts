/*  This is the entry point of the backend here server starts */

import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URL as string).then(()=> console.log("connected to database successfully!"));


const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello Pranjal here!" });
});



app.listen(500, ()=> {
    console.log(`server started successfully on http://localhost:500/test`);
});