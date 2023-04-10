const express = require('express');
const router = express.Router();


const admin_controller = require('../controllers/admin')
const manage_emp_controller = require('../controllers/admin_controller/manage_emp');
const manage_item_controller = require('../controllers/admin_controller/manage_item');
const manage_stock_controller = require('../controllers/admin_controller/manage_stock');
const report_controller = require('../controllers/admin_controller/report');


router.get('/', admin_controller.getAdmin);

// ---------------  manage-emp ---------------
router.get('/manage_emp', manage_emp_controller.Manage_emp);
router.post('/manage_emp/:action', manage_emp_controller.setEmployee);

// --------------- API vailidation ---------------
router.get('/manage_emp/is_duplicate_name', manage_emp_controller.is_duplicate_name);
router.get('/manage_emp/is_duplicate_name_id', manage_emp_controller.is_duplicate_name_id);




// ---------------  manage-item ---------------
router.get('/manage_item', manage_item_controller.manage_item);
router.post('/manage_item/:action', manage_item_controller.set_item);



// ---------------  manage-stock---------------
router.get('/manage_stock', manage_stock_controller.manage_stock);
router.post('/manage_stock/:action', manage_stock_controller.set_stock);



// ---------------  report---------------
router.get('/report', report_controller.report);

module.exports = router;
