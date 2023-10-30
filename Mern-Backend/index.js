const connectToMongo = require("./database/db");
const express = require('express')
var cors = require('cors')

const Routes = require('./routes/routes');
require("dotenv").config();
connectToMongo(); // connect to database

const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.json()); // middleware to use the json

const port = 5000;

app.use('/',Routes);


app.listen(port,()=>{
    console.log(`Backend is running on localhost:${port}`);
});