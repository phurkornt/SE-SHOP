const con = require('../config/db_config.js')


exports.get_sale_detail = async () => {
    let sql = ` SELECT sa.id , sa.date  , s.amount , s.total_price ,it.name  FROM sale_detail s , item it ,sale sa WHERE it.id = s.item_id and sa.id = s.sale_id`
    let result = await con.query(sql)
    return result;
}; 

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
