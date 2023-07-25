const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000;
//home page
app.get('/home',(req,res)=>{
    res.send("home page ");
})
//pproduct page
app.get('/product',(req,res)=>{
    res.send("product page ");
})
//pproduct page
app.get('/images',(req,res)=>{
    res.send("images page ");
})
//pproduct page
app.get('/about',(req,res)=>{
    res.send("about page ");
})
app.listen(port,()=>{
    console.log(`app lisented on port:${port}`);
})
