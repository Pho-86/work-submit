const express = require('express');
const router = express.Router();
const { genSaltSync, hashSync } = require('bcrypt');
const create = require('../models/new_employee');


router.post('/signup', (res,req, next) =>{
        const salt = genSaltSync(10);
        if (req.body.employee_name != ""&&
        req.body.department_id != ""&& 
        req.body.email != ""&&
        req.body.password != ""&&
        req.body.mobile != ""
        
    )
      {  req.body.password = hashSync(req.body.password, salt);
        console.log(req.body);
        create.post_signup(req.body,(req, result)=> {
            if (err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    }
    });
    module.exports = router;