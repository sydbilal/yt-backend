// require("dotenv").config()
import Dotenv from "dotenv";
import connectDB from "./db/index.js";

Dotenv.config({
    path :"./env"
})

connectDB()

// import express from "express"

// const app = express()

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERR", error)
//             throw error
//         })

//         app.listem(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error: ", error)
//         throw err
//     }
// })()