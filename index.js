import express from 'express';
import { connection } from './routes/db-config';
const app = express();
const port = 5000;

app.use("/js", express.static(__dirname + "./public/js"));
app.use("/css", express.static(__dirname + "./public/css"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json);

connection.connect((err) => {
    if (err) throw err;
    console.log("database is Connected");
});
app.listen(port);
