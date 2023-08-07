const app = require('./app');
const {serverPort} = require('./secret');



// server runer 
app.listen(serverPort,()=>{
    console.log(`Express server is runing at http://localhost:${serverPort}`);
})