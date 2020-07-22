

const EXPRESS = require('express'); 
const HTTP = require('http').Server.app; 
const PATH = require('path');
const FS = require('fs'); 
const APP = EXPRESS();
const EXPHBS = require('express-handlebars');
const PORT = 8078;
const REGULARROUTES = require('./routes/regularroutes');
 
 
////Set Static Path to Public folder.  
APP.use(EXPRESS.static(PATH.join(__dirname,'public')));

// Handlebars
APP.engine('.hbs', EXPHBS({ defaultLayout: 'main', extname: '.hbs' }));
APP.set('view engine' , '.hbs' );




APP.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

 

//// All routing goes threw REGULARROUTES file.
APP.use('/', REGULARROUTES);

