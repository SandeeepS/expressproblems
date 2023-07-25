const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const port = 3000;
//home page
/*app.get('/home',(req,res)=>{
    res.send("home page ");
})*/

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

//pproduct page
app.get('/product',(req,res)=>{
    res.sendFile(path.join(__dirname,'product.html'));
})

app.post('/product',(req,res)=>{
    res.send("product created ");
})

app.put('/product',(req,res)=>{
    res.send("product edited ");
})

app.delete('/product',(req,res)=>{
    res.send("product deleted ");
})
//images page
app.get('/images',(req,res)=>{
    res.send("images page ");
})
//about page
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'));
})
app.listen(port,()=>{
    console.log(`app lisented on port:${port}`);
})
