const express = require('express');
const db = require('./routes/db-config.js');
const app = express();
const port = process.env.PORT;

app.use("/js", express.static(__dirname + "./public/js"));
app.use("/css", express.static(__dirname + "./public/css"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json);

db.connect((err) => {
    if (err) throw err;
    console.log("Database is Connected!");
})
app.use("/", require("./routes/pages.js"));
app.use("/api", require('./controllers/auth.js'));
app.listen(port);
