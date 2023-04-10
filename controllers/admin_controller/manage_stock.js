


const model_item = require('../../models/item');
const model_stock = require('../../models/stock');
const date = require('../../config/getDate');


exports.manage_stock = async (req, res) => {
    if( req.session.role === "admin" ){
        let db_item = await model_item.get_item();
        // let db_position =  await model.get_position();
        res.render('template',{
            session_user_id:req.session.user_id,
            session_user:req.session.user,
            session_role:req.session.role,
            db_item:db_item,
            date:date.date,
            header:"Manage Stock ",
            file:'admin_page/manage_stock'
        });
    }else{
        res.redirect('/');
    }

};


exports.set_stock=async (req, res) => {
    if(req.session.role == "admin"){
        if(req.params.action === "add"){
            console.log(req.body);
        
            for (let i in req.body){
                let data = req.body[`${i}`];
                if( parseInt(data[1]) > 0 ){
                    await model_stock.insert_stock({
                        id:parseInt(data[0]),
                        import:parseInt(data[1]),
                        remain:parseInt(data[2]),
                        date:date.datetime
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
            res.redirect("../manage_stock");
        }
    }else{
        res.redirect("/manage_stock");
    }
};

