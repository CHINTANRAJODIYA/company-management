var express = require('express');
var router = express.Router();

var admin = require('../controller/admincontroller')

router.post('/login',admin.login)
router.get('/viewuser',admin.viewuser)
router.post('/addtask',admin.addtask)
router.post('/managetask/:id',admin.managetask)
router.get('/deletetask/:id',admin.deletetask)
router.post('/updatetask/:id',admin.updatetask)
router.get('/task/:id',admin.singletask)
router.get('/viewtask',admin.alltask)
router.get('/manageuser/:id',admin.manageuser)
router.post('/updateuser/:id',admin.updateuser)
router.get('/singleuser/:id',admin.singleuser)
router.get('/managetask',admin.managetask)

module.exports = router;
