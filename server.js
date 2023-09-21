
const express = require("express"); 
const app = express();

app.use(express.static(path.join(__dirname, "js")));
app.get("/", function(req,res) {
res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});

