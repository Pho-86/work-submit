const express = require('express');
const router = express.Router();
const { genSaltSync, hashSync } = require('bcrypt');
const ModelEmployee = require('../models/new_employee');


router.post('/signup', (res,req, next) =>{
        const salt = genSaltSync(10);
        if (req.body.employee_name != ""&&
        req.body.department_id != ""&& 
        req.body.email != ""&&
        req.body.password != ""&&
        req.body.mobile != ""
        
    )
      {  req.body.password = hashSync(req.body.password, salt);
        ModelEmployee.post_signup(req.body,(req, result)=> {
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
    router.post ('/login',(req, res) => {
        
        ModelEmployee.getUserByUserEmail(req.body.email, (err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            return res.json({
              success: 0,
              data: "Invalid email or password"
            });
          }
          const result = compareSync(body.password, results.password);
          if (result) {
            results.password = undefined;
            const jsontoken = sign({ result: results }, "qwe1234", {
              expiresIn: "1h"
            });
            return res.json({
              success: 1,
              message: "login successfully",
              token: jsontoken
            });
          } else {
            return res.json({
              success: 0,
              data: "Invalid email or password"
            });
          }
        });
      });
    module.exports = router;