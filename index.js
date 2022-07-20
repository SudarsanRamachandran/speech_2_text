const express = require('express');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const app = express();



//initialize sentry logging


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//default GET request
app.get(['/', '/health'], function (req, res) {
    res.send('node is up');
    

});







app.listen(port, async function () {
    console.log(`project is up: ${process.env.NODE_ENV}`);
 



 
 
   

});



