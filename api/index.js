//Lib
const express = require('express');
const router = express.Router();
const routerTest = require('./test/test');

//Middlewares list
router.use('/', (req, res, next)=>{
    next();
}, routerTest)

//exports
module.exports = router;