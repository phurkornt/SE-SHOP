const model = require('../../models/employee');

exports.report = async (req, res) => {
    if( req.session.role === "admin" ){
        // let db_employee =  await model.get_emp();
        // let db_position =  await model.get_position();
        res.render('template',{
            session_user_id:req.session.user_id,
            session_user:req.session.user,
            session_role:req.session.role,
            select:0,
            header:"Report ",
            file:'admin_page/report'
        });
    }else{
        res.redirect('/');
    }

};