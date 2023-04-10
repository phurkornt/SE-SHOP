


const model_item = require('../../models/item');
const model_stock = require('../../models/stock');

const model_sale = require('../../models/sale');

const date = require('../../config/getDate');

exports.report = async (req, res) => {
    if( req.session.role === "admin" ){
        // let db_employee =  await model.get_emp();
        // let db_position =  await model.get_position();
        let select = req.query.select || 0 ;

        if(select == 1){
            
            let db_sale = await model_sale.get_sale_detail();
            res.render('template',{
                session_user_id:req.session.user_id,
                session_user:req.session.user,
                session_role:req.session.role,
                select:req.query.select,
                db_sale:db_sale,
                date:date.date,
                time:date.currentTime,
                header:"Report ",
                file:'admin_page/report'
            });


        }if(select == 2){

            let db_item = await model_item.get_item();

            res.render('template',{
                session_user_id:req.session.user_id,
                session_user:req.session.user,
                session_role:req.session.role,
                select:req.query.select,
                db_item:db_item,
                date:date.date,
                time:date.currentTime,
                header:"Report ",
                file:'admin_page/report'
            });


        }else{

            res.render('template',{
                session_user_id:req.session.user_id,
                session_user:req.session.user,
                session_role:req.session.role,
                select:req.query.select,
                header:"Report ",
                file:'admin_page/report'
            });

        }

        
    }else{
        res.redirect('/');
    }

};