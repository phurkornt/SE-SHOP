
const model = require('../../models/employee');

exports.Manage_emp = async (req, res) => {
    if( req.session.role === "admin" ){
        let db_employee =  await model.get_emp();
        let db_position =  await model.get_position();
        // console.log("#",db_employee);
        res.render('template',{
            session_user_id:req.session.user_id,
            session_user:req.session.user,
            session_role:req.session.role,
            db_employee:db_employee,
            db_position:db_position,
            header:"Manage Employee",
            file:'admin_page/manage_emp'
        });
    }else{
        res.redirect('/');
    }

};


exports.setEmployee =async (req, res) => {
    if(req.session.role == "admin"){
        if(req.params.action === "add"){
            await model.insert_emp(req.body).then((data)=>{return data});
            res.redirect("../manage_emp");
        }else if(req.params.action === "delete"){
            await model.delete_emp(req.body).then((data)=>{return data});
            res.redirect("../manage_emp");
        }else if(req.params.action === "update"){
            await model.update_emp(req.body).then((data)=>{return data});
            res.redirect("../manage_emp");
        }
    }else{
        res.redirect("/");
    }
};


// ---------------------- validate ----------------------
exports.is_duplicate_name = async (req, res) => {
    let is_same = await model.is_duplicate_name(req.query).then((data)=>{return data})
    if(is_same === false){
        res.send({status:1});
    }else{
        res.send({status:-1});
    }
};
exports.is_duplicate_name_id = async (req, res) => {
    let is_same = await model.is_duplicate_name_id(req.query).then((data)=>{return data})
    if(is_same === false){
        res.send({status:1});
    }else{
        res.send({status:-1});
    }
};

