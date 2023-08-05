const express = require('express');
const app = express();

// use morgan as development purpose.
const morgan = require('morgan');
const bodyParser = require('body-parser');
//application level middleware
app.use(morgan('dev'));
/**
 * Middleware 
 * Application level middleware
 * Router level 
 * Error handling middleware
 * Built In middleware
 * Third party middleware
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// Router Middleware
const isUserLoggedIn = (req, res, next)=>{
    // Information can access those user who loggedin.
    const login = true;
    if(login){
        req.body.id = 101;
        console.log("Your can access this info");
        next()
    }
    else{
        res.status(401).send({
            message:"You are not valid user!"
        });
    }
}
app.get('/api/user', isUserLoggedIn,(req,res)=>{
    console.log(`welcome to app! your id:  ${req.body.id}`);
    res.status(200).send({
        message: "Middleware is working perfectly!"
    });
});



  
// server runer 
app.listen(3001, ()=>{
    console.log(`Express server is runing at http://localhost:3001`);
})