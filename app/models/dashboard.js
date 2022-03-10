import connect from '../../config/db_connect'

export const total_employee = (callback)=>{
    return connect.query(
        "SELECT COUNT(employee_id) "+
        "FROM employees",
        [],
        callback
    )
};

export const get_work_at_home= (callback) =>{
    return connect.query(
        "SELECT count(wt.work_type_name), wt.work_type_name "+
        "FROM work_submits inner join work_types as wt on wt.work_type_id = work_submits.work_type_id "+
        "inner join employees as emp on emp.employee_id = work_submits.employee_id "+
        "where wt.work_type_id = 1 and emp.employee_id = ? ",
        [],callback
    )
};
export const get_work_at_office= (callback) =>{
    return connect.query(
        "SELECT count(wt.work_type_name), wt.work_type_name "+
        "FROM work_submits inner join work_types as wt on wt.work_type_id = work_submits.work_type_id "+
        "inner join employees as emp on emp.employee_id = work_submits.employee_id "+
        "where wt.work_type_id = 2 and emp.employee_id = ? ",
        [],callback
    )
};
export const get_leave= (callback) =>{
    return connect.query(
        "SELECT count(wt.work_type_name), wt.work_type_name "+
        "FROM work_submits inner join work_types as wt on wt.work_type_id = work_submits.work_type_id "+
        "inner join employees as emp on emp.employee_id = work_submits.employee_id "+
        "where wt.work_type_id = 3 and emp.employee_id = ? ",
        [],callback
    )
};

export const get_list_department= (callback) =>{
    return connect.query(
        "SELECT dpm.department_name , emp.employee_name "+
        "from employees as emp "+
        " INNER join departments as dpm on dpm.department_id = emp.department_id "+
        "where dpm.department_name = ? ",
        [],callback
    )
};