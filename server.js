const express = require("express"); 
const app = express();

app.use(express.static("./public"));
app.get("/", function(req,res) {
    res.send("GET Request Called");
});
app.post("/", function(req,res) {
    res.sendFile(__dirname + "Jordan-La/code-project/index.html");
});
app.listen(process.env.PORT, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
