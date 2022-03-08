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
    const getUserByUserEmail = ((email, callBack) => {
        connect.query(
          `select * from employees where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      });
module.exports={
    post_signup,
    getUserByUserEmail
}
