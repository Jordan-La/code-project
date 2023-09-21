
const express = require("express");
const app = express();

app.get("/", function(req,res) {
    res.sendFile("Jordan-La/code-project/index.html");
});
app.post("/", function(req,res) {
    res.sendFile("Jordan-La/code-project/index.html");
});

app.listen(process.env.PORT , function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
//d wdahdw d


