const PORT = process.env.PORT || 3001;
// const express = require('express');
// const colors = require('colors');
import express from "express";
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDb from "./config/db.js";

import authRoutes from './routes/authRoute.js'

import cors from 'cors';

// configure env
// dotenv.config({ path: './.env' })
// or , This is valid for only for current path
dotenv.config()




const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())


// database Config
connectDb();

// router
app.use('/api/v1/auth', authRoutes)

app.get('/', (req, res) => {
    res.send({ message: "Welcome to home Page" })
})






// Server Starting
app.listen(PORT, () => {
    console.log(`Server is on : Mode ${process.env.DEV_MODE} running ${PORT}`.america.bgWhite);
})