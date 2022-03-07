const express = require('express');
const jwt = require('jsonwebtoken');

const empMiddleware = require('../middlewares/employee')
const bcrypt = require('bcrypt');

const ModelEmployee = require('../models/employee')
const router = express.Router();


router.post('/signup', (res,req, next) =>{
    
    if (req.body.employee_name != ""&&
        req.body.department_id != ""&& 
        req.body.email != ""&&
        req.body.password != ""&&
        req.body.mobile != ""
        
    )
    {
        console.log(req.body);
    //     ModelEmployee.get_signup(req.body,(err,result)=>{
    //     if (req.body.email == email){
    //         return res.status(409).send({
    //             message: "This email has been use !"
    //         })
    //     }else {
    //         bcrypt.hash(req.body.password, 10,(err,hash)=>{
    //             if (err){
    //                 next (err);
    //                 return res.status(500).send({
    //                     message: err,
    //                 });
    //             }else {
    //                 ModelEmployee.post_signup(req.body,(err,result)=>{
    //                     if (err)
    //                     {
    //                         next(err)
    //                     }else{
    //                         return res.status(200).send({
    //                         message: "Registered !"})
    //                     }

    //                 });
    //             }         
    //         });
    //     }
    
    // });
}
});

router.post('/login',(req,res,next)=>{
    if (req.body.email != ""&&
        req.body.password != "")
    {
        ModelEmployee.get_login((err, result)=>{
            if (req.body.email != email){
                return res.status(400).send({
                    message: "Invalid email"
                })
            }else{
                bcrypt.compare(req.body.password, result[0]['password'],(bcryptErr, bcryptResult)=>{
                    if (bcryptErr){
                        next(bcryptErr)
                    }
                    if (bcryptResult){
                        const jwt = jwt.sign({
                            email: result[0].email,
                            employee_id: result[0].id,
                        },'SECRETKEY', {expiresIn: '3d'}
                        );
                        return res.status(200).send({
                            message: 'Logged In !',
                            token,
                            employee: result[0]
                        })
                    }
                })
            }return res.status(400).send({
                message: "email or password are incorrect !"
            })
        })
    }
});
module.exports = router;