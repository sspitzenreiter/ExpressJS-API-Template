//Lib
const express = require('express');
const router = express.Router();
const Model = require('./../model/testModel');
const model = new Model();
const validator = require('./testValidator');

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'tes handling GET request to /siswa'
    });
});

//post request
router.post('/', validator.validate("verify_data"), validator.verify,(req, res, next) => {
    res.status(201).json({
        message: 'tes handling POST request to /siswa'
    });
});

//get individual data
router.get('/', (req, res, next) => {
    model.getData().then(x=>{
        res.status(200).send({
            data:x
        })
    }).catch(err=>{
        //Any error will be redirected to logger in app.js middlewares
        next(err);
    })
});

//update
router.patch('/:id', (req, res, next) => {

});

//delete
router.delete('/:id', (req, res, next) => {

});
//exports
module.exports = router;