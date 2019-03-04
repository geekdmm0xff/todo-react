var express = require("express");
var app = express();

app.get("/api",(req,res)=>{
    res.json({"result" : 8});
});

app.use(express.static("www"));

app.listen(3000);