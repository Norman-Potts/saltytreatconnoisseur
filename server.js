

const EXPRESS = require('express'); 
const ROUTER = EXPRESS.Router();
const HTTP = require('http').Server.app; 
const PATH = require('path');
const FS = require('fs'); 
const APP = EXPRESS();
const PORT = 8079;

const REGULARROUTES = require('./routes/regularroutes');
const BODYPARSER = require('body-parser');

const MESSAGESDATABASE = require('./models/messages/messagesdatabase.js');//// Put the database stuff in a module.
MESSAGESDATABASE.plzdomydbsetup(); //// Run Database Set up.
  
////Set Static Path to Public folder.  
APP.use(EXPRESS.static(PATH.join(__dirname,'public')));

APP.use(EXPRESS.json()); //// " a method inbuilt in express to recognize the incoming Request Object as a JSON Object" s   
APP.use(BODYPARSER.json( {limit: '5mb' })); //// middleware for parsing json objects
APP.use(BODYPARSER.urlencoded({ extended: false})); //// middleware for parsing bodies from URL
      
APP.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//// All routing goes threw REGULARROUTES file.
APP.use('/', REGULARROUTES);

