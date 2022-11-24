const { urlencoded } = require("express");
const express = require("express");
require("dotenv").config()
const {router} = require("./routes/routes");


const app = express();
app.use(express.json());
app.use(express(urlencoded({extended: true})));
app.use("/users", router)



const port = process.env.PORT;

app.listen(port, ()=>console.log(`Auth service active on port ${port}`))