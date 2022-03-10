const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const ModelSubmits = require('../models/work_submit');

router.get('/', (req,res,next) =>{
    ModelSubmits.list_all_submits((errList, resultList) => {
        if (errSubmit) {
            next(errList)
        }
        return res.json(
            {
                status: 200,
                data: resultList
            }
        )
    })

});
router.post('/submit_work',(req,res,next)=>{
    if (req.body.emp_id != ""&&
        req.body.work_type_id != ""&&
        req.body.date != ""&&
        req.body.detail != ""&&
        req.body.remark != ""     
    ){
        ModelSubmits.create_submit(req.body,(errSubmit,resultSubmit)=>{
            if (errSubmit){
                next(errSubmit)
            }else return res.json({
                status: 200,
                message: 'Work has been submitted !'

            })
        })
    }else {
        next(createError(400))
    }

});

router.get('/',(req,res)=>{

})
module.exports = router;