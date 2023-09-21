const express = require("express");
const app = express();

app.get("/", function(req,res) {
    console.log("got client req");
    res.sendFile("/index.html");
});
app.post("/", function(req,res) {
    console.log("returning index");
    res.sendFile("index.html");
});

app.listen(process.env.PORT , function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
//d wdahdw d

