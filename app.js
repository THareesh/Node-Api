var express = require('express');
   app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/',function (req,res,next) {
       if(req.url.substr(-1)=== '/'){
           res.send("welcome to innovapath");
       }
       next();
   });
   app.use('/janu',require('./routes/janu'))
   app.listen(2005);