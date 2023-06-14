const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv= require("dotenv").config();
connectDb();

//thunder client 
const app =express()
const port = process.env.PORT || 5000;

//app.use ==>> use the middleware
app.use(express.json());//provide a parser that provide which help to parser the response from client to server
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users" ,require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})