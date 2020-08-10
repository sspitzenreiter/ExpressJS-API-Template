const {query, body, validationResult, header, oneOf} = require('express-validator');
const {Op} = require('sequelize');
//Check express-validator
exports.validate = (method) =>{
    switch(method){        
        case 'verify_data':{
            return [
                body('data').notEmpty().isString()
            ]
        }
    }
}

//Always required after validate
exports.verify = (req, res, next) =>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(422).json({
                errors:errors.array()
            })
            return;
        }else{
            return next();
        }
    }catch(err){
      return next(err);
    }
}

