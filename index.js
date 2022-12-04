const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL,() =>{
    console.log("CONNECTED TO MONGO DB");
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES 
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log("Server is running");
});

// JSON WEB TOKEN
