const express = require("express");
const app = express();
app.get("/", function(req,res) {
    res.sendFile("https://vscode.dev/github.com/Jordan-La/code-project/blob/main/script.js#L21");
});
app.listen(process.env.PORT, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});

