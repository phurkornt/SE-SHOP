const con = require('../config/db_config.js')



exports.insert_stock= async (input) => {
    let sql = ` INSERT INTO stock_item( item_id , remaining , import ,date) 
    VALUES ("${input.id}" , ${input.remain} , ${input.import} , "${input.date}");`
    let result = await con.query(sql)
};