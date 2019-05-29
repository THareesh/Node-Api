var express = require('express'),
    router = express.Router();
router.get('/',function (req,res) {
     res.send("we all are employees");
});

/*router.use('/login',require('./login'));*/
router.use('/signUp',require('./signUp'));
module.exports = router;
