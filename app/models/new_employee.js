const connect = require('../../config/new_db_connect');


    const post_signup =( (data,callBack) =>{
        connect.query("INSERT INTO employees ((`employee_name`, `department_id`, `email`, `password`,"+
        " `mobile`, `is_admin`, `created_at`, `updated_at`, `deleted_at`)" +
        "VALUES (?,?,?,?,?,0,CURRENT_TIMESTAMP,NULL,NULL) "
        ,[
            data.employee_name,
            data.department_id,
            data.email,
            data.password,
            data.mobile
        ],(err, results, fields)=>{
            if (err){
                return callBack(err)
            }
            return callBack(null, results)
        }
        )
    });
module.exports={
    post_signup
}
