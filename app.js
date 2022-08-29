const express = require("express");
const bodyparser = require("body-parser");
const routes = require("./Routes/routes.js");

const app = express();
app.use(bodyparser.urlencoded({extended : true}));
app.use("/",routes);

app.listen("9001",(req,res)=>{
   console.log("Server is Running on 9001");
});