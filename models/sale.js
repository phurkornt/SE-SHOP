const con = require('../config/db_config.js')


exports.get_sale_id = async () => {
    let sql = ` SELECT MAX(id) as id FROM sale   `
    let result = await con.query(sql)
    return result;
};


exports.insert_sale= async (input) => {
    let sql = ` INSERT INTO sale( date , total_price) 
    VALUES ("${input.date}" , ${input.total_price});`
    let result = await con.query(sql)
};

exports.insert_sale_detail= async (input) => {
    let sql = ` INSERT INTO sale_detail( sale_id , item_id , amount , total_price) 
    VALUES (${input.sale_id} , ${input.item_id} , ${input.amount} , "${input.total_price}");`
    let result = await con.query(sql)
};
