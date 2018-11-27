const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');  

//------for hbs-------
// const expressHbs = require('express-handlebars');

const app = express();

//------for pug------- 

// app.set('view engine', 'pug');

//------for hbs-----

// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layouts', 
//     defaultLayout: 'main-layout', 
//     extname: 'hbs'
// }));
// app.set('view engine', 'hbs');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page not found'});
});

app.listen(3000);