const express=require('express')
const app=express();
const connectionDb = require("./config/db");
const routes = require("./routes/urlRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectionDb("mongodb://127.0.0.1:27017/url")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/url", routes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});