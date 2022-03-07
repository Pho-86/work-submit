const jwt = require('jsonwebtoken');

module.exports = {
    ValidateRegister: (req, res, next) =>{

        if (!req.body.email ){
            return res.status(400).send({
                message: "Please enter your email"
            });
        }
        if (!req.body.password || req.body.password < 8){
            return res.status(400).send({
                message: "Please enter password more than 8 letters"
            });
        }
        next();
    },
    isLoggedIn: () =>{},
};