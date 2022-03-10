const connect = require('../../config/db_connect');


const  create_submit = ({emp_id,work_type_id,date,detail,remark},callback) =>{
    return connect.query(
        " INSERT INTO work_submits( employee_id, work_type_id, date, detail, status, "+ 
        " remark, created_at, updated_at , deleted_at) "+ 
        " VALUES (?,?,?,?,0,?,CURRENT_TIMESTAMP,null,null)",
        [
            emp_id,
            work_type_id,
            date,
            detail,
            remark
        ],callback
    )

};
const list_all_submits = (callback)=>{
    return connect.query(
    " SELECT work_submit_id, d.department_name, employees.employee_name,work_types.work_type_name,"+
    " date, detail, status, remark FROM work_submits "+
    " INNER JOIN employees ON employees.employee_id = work_submits.employee_id "+
    " inner JOIN work_types ON work_types.work_type_id = work_submits.work_type_id "+
    " inner JOIN departments as d ON d.department_id = employees.department_id "
    ,[]
    ,callback    
    )

};

const get_submit_by_name = (callback)=>{
    return connect.query(
        
        " SELECT work_submit_id, d.department_name, employees.employee_name,work_types.work_type_name, "+
        " date, detail, status, remark "+
        " FROM work_submits "+
        " INNER JOIN employees ON employees.employee_id = work_submits.employee_id "+
        " inner JOIN work_types ON work_types.work_type_id = work_submits.work_type_id "+
        " inner JOIN departments as d ON d.department_id = employees.department_id "+
        " WHERE employees.employee_name = ? ",
        [],callback

    )
};
const get_submit_by_date = (start_date,end_date,callback)=>{
    return connect.query(
        " SELECT work_submit_id, d.department_name, employees.employee_name,work_types.work_type_name, "+
        " date, detail, status, remark "+
        " FROM work_submits "+
        " INNER JOIN employees ON employees.employee_id = work_submits.employee_id "+
        " inner JOIN work_types ON work_types.work_type_id = work_submits.work_type_id "+
        " inner JOIN departments as d ON d.department_id = employees.department_id "+
        " WHERE date BETWEEN ? AND ? ",
        [start_date,end_date],
        callback
    )

}
module.exports = {
    create_submit,
    list_all_submits,
    get_submit_by_name ,
    get_submit_by_date
        
}