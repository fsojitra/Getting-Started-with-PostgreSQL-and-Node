var express = require('express');
var router = express.Router();
var db = require('../controllers/controller');

router.get('/', db.user);
router.get('/getUser', db.getUser);
router.post('/addUser', db.addUser);
router.post('/getUpdateUser', db.getUpdateUser);
router.post('/updateUser', db.updateUser);
router.post('/deleteUser', db.deleteUser);

module.exports = router;
