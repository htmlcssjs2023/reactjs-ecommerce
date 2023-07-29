const express = require('express');
const app = express();

// use morgan as development purpose.
const morgan = require('morgan');
app.use(morgan('dev'));

// create testing porpuse route / N point.
app.get('/test', (req, res)=>{
    res.status(200).send(
        {
            message:'Get: API is working properly'
        }
    );
});
// post
app.get('/test', (req, res)=>{
    res.status(200).send(
        {
            message:'POST: API is working properly'
        }
    );
});
// put
app.get('/test', (req, res)=>{
    res.status(200).send(
        {
            message:'PUT: API is working properly'
        }
    );
});
//patch
app.get('/test', (req, res)=>{
    res.status(200).send(
        {
            message:'Patch: API is working properly'
        }
    );
});

// server runer 
app.listen(3001, ()=>{
    console.log(`Express server is runing at http://localhost:3001`);
})