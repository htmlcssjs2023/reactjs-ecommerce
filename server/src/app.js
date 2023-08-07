const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // One minute
    max:5,
    message:"Too many request from this API, Please try later"
});

const app = express();

//application level middleware
app.use(rateLimiter);
app.use(xssClean());
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