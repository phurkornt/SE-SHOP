

const model_item = require('../../models/item');

exports.manage_item = async (req, res) => {
    if( req.session.role === "admin" ){
        let db_item = await model_item.get_item();
        // let db_employee =  await model.get_emp();
        // let db_position =  await model.get_position();
        // console.log("#",db_employee);
        res.render('template',{
            session_user_id:req.session.user_id,
            session_user:req.session.user,
            session_role:req.session.role,
            db_item:db_item,
            header:"Manage item",
            file:'admin_page/manage_item'
        });
    }else{
        res.redirect('/');
    }

};


exports.set_item=async (req, res) => {
    if(req.session.role == "admin"){
        if(req.params.action === "add"){
            await model_item.insert_item(req.body).then((data)=>{return data});
            res.redirect("../manage_item");
        }else if(req.params.action === "delete"){
            await model_item.delete_item(req.body).then((data)=>{return data});
            res.redirect("../manage_item");
        }else if(req.params.action === "update"){
            await model_item.update_item(req.body).then((data)=>{return data});
            res.redirect("../manage_item");
        }
    }else{
        res.redirect("/manage_item");
    }
};

