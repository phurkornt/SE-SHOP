
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', express.static(path.join(__dirname, 'public')))
app.use('/emp', express.static(path.join(__dirname, 'public')))


app.use("/axios",express.static('node_modules/axios/dist'));

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false
}))

const loginRoutes = require('./routes/login');
const adminRoutes = require('./routes/admin');
const empRoutes = require('./routes/emp');



app.use('/admin',adminRoutes);
app.use('/emp',empRoutes);
app.use('/',loginRoutes);




app.listen(3000);