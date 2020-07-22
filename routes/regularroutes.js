const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
 
 
const FS = require('fs'); 

 
 
 
ROUTER.get('/', (req, res) => { console.log(' ROUTER get / ');
    res.render('c', {  
        layout: 'home',
    });
});



 


 

module.exports = ROUTER;