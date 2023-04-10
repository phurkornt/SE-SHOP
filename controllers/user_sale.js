
// const model = require('../../models/');
const model_item = require('../models/item');
const model_stock = require('../models/stock');

const model_sale = require('../models/sale');

const date = require('../config/getDate');

exports.user_sale = async (req, res) => {
    if( req.session.role === "emp" || req.session.role === "admin" ){
        let db_item = await model_item.get_item();
        res.render('template',{
            session_user_id:req.session.user_id,
            session_user:req.session.user,
            session_role:req.session.role,
            db_item:db_item,
            date:date.date,
            header:"Sale",
            file:'user_sale'
        });
    }else{
        res.redirect('/');
    }

};


exports.set_sale=async (req, res) => {
    if( req.session.role === "emp" || req.session.role === "admin" ){
        if(req.params.action === "add"){
            console.log(req.body);
            // ID1: [ '1', '2', '18', '400' ],
            //  sale_id , จำนวน , คงเหลือ , ราคา
            // await model_sale.insert_sale
            // model_sale.get_sale_id
            // await model_sale.insert_sale_detail


            await model_sale.insert_sale({
                date:date.datetime,
                total_price:req.body.total_price
            });
            let sale_id = await model_sale.get_sale_id();
            sale_id = sale_id[0].id;

            console.log("SALE" , sale_id);
            for (let i in req.body){
                let data = req.body[`${i}`];
                
                
                if( parseInt(data[1]) > 0 && i.substring(0,2) == "ID" ){

                    await model_sale.insert_sale_detail({
                        sale_id:parseInt(sale_id),
                        item_id:parseInt(data[0]),
                        amount:parseInt(data[1]),
                        total_price:parseInt(data[3])
                    });

                    await model_item.update_item_amount({
                        amount:parseInt(data[2]),
                        id_update:parseInt(data[0])
                    });

                    // console.log("work");
                }
            }
            
            // 2023-04-10 14:59:52

            // await model_item.insert_item(req.body).then((data)=>{return data});
            res.redirect("../user_sale");
        }
    }else{
        res.redirect("/user_sale");
    }
};

