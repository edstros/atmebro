'use strict';

var express = require('express');
var router = express.Router();

var ctrl = require('./controller');

router.get('/', ctrl.index);
router.post('/post', ctrl.create);
router.get('/post/:id', ctrl.show);
router.delete('/post/:id', ctrl.delete);

module.exports = router;
