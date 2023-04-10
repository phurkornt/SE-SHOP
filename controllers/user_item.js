
// const model = require('../../models/');
const model_item = require('../models/item');

exports.user_item = async (req, res) => {
    if( req.session.role === "emp" || req.session.role === "admin" ){
        let db_item = await model_item.get_item();

        // console.log("#",db_employee);
        res.render('template',{
            session_user_id:req.session.user_id,
            session_user:req.session.user,
            session_role:req.session.role,
            db_item:db_item,
            header:"Amount Item",
            file:'user_item'
        });
    }else{
        res.redirect('/');
    }

};

