const express = require("express");
require("dotenv").config();
const router = require("./routes/routes")


const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/products", router)


const port = process.env.PORT
app.listen(port, ()=>console.log(`api service port: ${port} active`))