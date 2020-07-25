

const EXPRESS = require('express'); 
const ROUTER = EXPRESS.Router();
const HTTP = require('http').Server.app; 
const PATH = require('path');
const FS = require('fs'); 
const APP = EXPRESS();
const PORT = 8078;


 

////Set Static Path to Public folder.  
APP.use(EXPRESS.static(PATH.join(__dirname,'public')));

 
      
APP.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

