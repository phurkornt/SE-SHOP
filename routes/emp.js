const express = require('express');

const router = express.Router();

const emp_Controller = require('../controllers/emp')
const user_amount_Controller = require('../controllers/user_item')
const user_sale_Controller = require('../controllers/user_sale')

router.get('/', emp_Controller.getEmp)


// ---------------  user_item ---------------
router.get('/user_item',user_amount_Controller.user_item);

// ---------------  user_item ---------------
router.get('/user_sale',user_sale_Controller.user_sale);
router.post('/user_sale/:action', user_sale_Controller.set_sale);



module.exports = router;
