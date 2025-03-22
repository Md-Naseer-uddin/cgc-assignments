const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes")

const app = express()

app.listen("5000", () => console.log("Server is up and runnig!"))

app.use(express.json())
app.use("/api/v1", routes)

mongoose.connect("mongodb://127.0.0.1:27017/cgc")
    .then(() => console.log("DB is connected Successfully!"))
    .catch((e) => { console.log(e) })