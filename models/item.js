const con = require('../config/db_config.js')

exports.get_item = async () => {
    let sql = ` SELECT * FROM item WHERE flag = 1 `
    let result = await con.query(sql)
    return result;
};


exports.insert_item= async (input) => {
    let sql = ` INSERT INTO item( name , price , amount ,flag) VALUES ("${input.name || '' }" , ${input.price || 0} , 0 , 1);`
    let result = await con.query(sql)
};
exports.update_item = async (input) => {
    let sql = ` UPDATE item SET name=  "${input.Uname}"  , price= "${input.Uprice}"
                WHERE id = ${input.id_update} `
    let result = await con.query(sql)
};
exports.delete_item = async (input) => {
    // Set flag to 0
    let sql = ` UPDATE item SET flag = 0 WHERE id = ${parseInt(input.id_del)}`
    let result = await con.query(sql)
};




exports.update_item_amount = async (input) => {
    let sql = ` UPDATE item SET amount= ${input.amount}
                WHERE id = ${input.id_update} `
    let result = await con.query(sql)
};