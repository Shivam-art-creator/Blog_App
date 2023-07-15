const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware --> to parse the data
app.use(express.json());

// import routes
const blog = require("./routes/blog");

// mount the routes
app.use("/api/v1",blog);


// start server
app.listen(PORT,()=>{
    console.log(`App is started at Port No ${PORT}`);
});

// Database connection
const connectWithDb = require("./config/database");
connectWithDb();


// Default routes 
app.get("/",(req,res)=>{
    res.send("<h1>This is home page baby</h1>");
})
