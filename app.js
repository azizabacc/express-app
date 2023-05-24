const express = require('express');

//createthe app
const app = express();

//middleware function : each time a resquest is received the middleware fct is executed
app.use((req, res, next) =>{
    console.log('Request received.');
    next();
});
//201 Created:the request has been successfully processed and a new resource has been created.
app.use((req, res, next)=>{
res.status(201);
next();
});
app.use((req, res, next) =>{
    res.json({message: 'the request has been received'});
});
//no next because last middleware
app.use((req, res)=>{
    console.log('Response sent with success');
});
// thanks to that we can call the app from other files
module.exports = app;