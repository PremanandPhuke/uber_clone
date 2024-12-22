// We use dotenv for running projects on different ports,
// whereas which port we need to use will be decided by using dynamic variables 
// and to configure that port by our project that's why we are using "dotenv"
const dotenv= require('dotenv');
dotenv.config();

// we use cors for accepring request from a specified websites or specified links 
// and after deploying we will put our project link in cors(_link_) so it will accept req 
// only from that link or website
const cors = require('cors');
const express= require('express');

const app= express();
app.use(cors());

app.get('/', (seq, res)=>{
    console.log("Backend Running!");
    
});

module.exports= app;