var express = require("express");
var path = require("path");
var mongodb = require("mongodb");
var cors = require("cors");
var bodyparser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
app.use(express.json())
app.use(cors())





mongoose.connect("mongodb://localhost:27017/contactlist",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

DBconnected = mongoose.connection;

DBconnected.on("open", () => {
  console.log("DB is connected");
});








// getting the routes


const GetRouteApp=require("./routes/route")
app.use("/router" , GetRouteApp)
























//Endpoints Here

app.listen(700, ( )=> {
  console.log("The server is running on port 700");
});
