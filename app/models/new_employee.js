const pool = require("../../config/new_db_connect");

module.exports = {
  create: (data, callBack) => {
    pool.query
      ("INSERT INTO employees (employee_name, department_id, email, password, "+
        " mobile, is_admin, created_at, updated_at, deleted_at ) " +
        "VALUES (?,?,?,?,?,0,CURRENT_TIMESTAMP,NULL,NULL ) ",
      [
        data.employee_name,
        data.department_id,
        data.email,
        data.password,
        data.mobile,

      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from employees where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

};
