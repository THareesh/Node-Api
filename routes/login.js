var express = require('express');
    router = express.Router();
    Controller = require('./../controllers/logincontroller');
      sc = new Controller();
      router.post('/',sc.post.bind(sc));
      module.exports = router;


