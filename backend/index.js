import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'

import { supabase, connect } from "./configs/database.js";

import indexRouter from "./routes/index.route.js";


const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const PORT = process.env.PORT || 5000;
connect();

const frontendDomain = process.env.FRONTEND_DOMAIN;
app.use(
  cors({
    origin: frontendDomain,
    credentials: true,
  })
);

app.use("/api", indexRouter); // all routers

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

