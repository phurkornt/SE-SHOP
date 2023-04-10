const con = require('../config/db_config.js')

exports.get_emp = async () => {
    let sql = ` SELECT em.id,em.f_name,em.l_name,em.address,em.tel,em_pos.name as position  FROM employee em , employee_position em_pos 
                where em_pos.id = em.position_id and em.flag = 1`
    let result = await con.query(sql)
    return result;
};
exports.get_position = async () => {
    let sql = ` SELECT * FROM employee_position `
    let result = await con.query(sql)
    return result;
};


exports.insert_emp = async (input) => {
    let sql = ` INSERT INTO employee( f_name , l_name , address  , tel , username  , position_id , flag_login , flag) 
                VALUES ("${input.Fname}", "${input.Lname}", "${input.address}", "${input.tel}","${input.username}",${input.position} , 0 , 1);`
    let result = await con.query(sql)
};
exports.update_emp = async (input) => {
    let sql = ` UPDATE employee SET f_name=  "${input.UFname}"  , l_name= "${input.ULname}" , address= "${input.Uaddress}" ,
                tel= "${input.Utel}"  , position_id= ${input.position} WHERE id = ${input.id_update} `
    let result = await con.query(sql)
};
exports.delete_emp = async (input) => {
    // Set flag to 0
    let sql = ` UPDATE employee SET flag = 0 WHERE id = ${parseInt(input.id_del)}`
    let result = await con.query(sql)
};

exports.is_duplicate_name = async (input) => {
    /**
     * f_name , l_name
     */
    console.log(input);
    let sql = ` SELECT * FROM employee WHERE f_name = '${input.f_name}' and l_name = '${input.l_name}' or username = '${input.username}'  and flag = 1 `
    let result = await con.query(sql)
    if( result.length > 0 ){
        return true;
    }else{
        return false;
    }
};
exports.is_duplicate_name_id = async (input) => {
    /**
     * f_name , l_name
     * id
     */
    let sql = `SELECT * FROM employee WHERE f_name = '${input.UFname}' and l_name = '${input.ULname}' and id !=${input.id}  and flag = 1 `
    let result = await con.query(sql)
    if( result.length > 0 ){
        return true;
    }else{
        return false;
    }
};
