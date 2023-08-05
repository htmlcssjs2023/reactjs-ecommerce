const express = require('express');
const app = express();

// use morgan as development purpose.
const morgan = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');
//application level middleware
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/api/user', (req,res)=>{
    console.log('Welcome to app !');
    res.status(200).send({
        message: "Middleware is working perfectly!"
    });
});

// client side error handling.
app.use((req,res,next)=>{
     next(createError(401, "Page Not Found",))
});

// server side error handling
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success:false,
        message:err.message
    })
  });

  module.exports = app;