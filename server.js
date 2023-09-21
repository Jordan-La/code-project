const express = require("express");
const app = express();

app.listen(process.env.PORT, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});

