const express = require('express')
const router = require("../src/routers/tour")
const TRanking = require("../src/models/t")

const app = express()
require("../src/db/conn");


const port = process.env.PORT || 5000;

app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`connection is live at port no. ${port}`)
})


