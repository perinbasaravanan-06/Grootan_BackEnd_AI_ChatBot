const express = require('express');

const app = express();
const PORT = 4000;
 
app.get('/',(req,res)=>{
    res.send("App is running");
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on  http://localhost:/${PORT}`);
})