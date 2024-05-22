var express = require('express');
var router = express.Router();

var user= require('../controller/usercontroller')

router.post('/register',user.register)
router.post('/login',user.login)
router.get('/get_task',user.get_task)


module.exports = router;
