
const connect = require('../../config/db_connect');

const post_signup = ({employee_name,department_id,email,password,mobile}, callback) => {
   
    return connect.query(
        "INSERT INTO `employees`( `employee_name`, `department_id`, `email`, `password`,"+
        " `mobile`, `is_admin`, `created_at`, `updated_at`, `deleted_at`) "+
         "VALUES (?, ?, ?, ?, ?, 0,CURRENT_TIMESTAMP,null,null)",
         [employee_name,department_id,email,password,mobile],
         callback)
};
const get_signup = (callback) =>{
    return connect.query(
        `SELECT email FROM employees`
    ),
    [],callback
};

const get_login = (callback) =>{
    return connect.query("SELECT email FROM employees "),
    [],callback
}


module.exports ={
    post_signup,
    get_signup,
    get_login

}