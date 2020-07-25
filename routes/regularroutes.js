
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const { body, validationResult } = require('express-validator');
const MESSAGEDATABASE = require('../models/messages/messagesdatabase.js');

const FS = require('fs'); 



//// Recive form. 
ROUTER.post('/ReciveForm', [
    body('Email').trim().not().isEmpty().withMessage('Email cannot be empty.').isEmail().withMessage('Must be a valid email. Ex: JohnSmith@example.com ').normalizeEmail(),
    body('Name').trim().not().isEmpty().withMessage('Name cannot be empty.').isLength({ min: 1, max: 20 }).withMessage('Must be between 1 and 30 characters.').escape(),
    body('Message').trim().not().isEmpty().withMessage('Message cannot be empty.').isLength({ min: 5, max: 200 }).withMessage('Must be between 1 and 200 characters.').trim().escape()
], (req, res) => {
try {      
  
    console.log('POST /ReciveForm '); 
                 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {            
            var r = errors.array();
            //// Get just the messages and add into an array. Then send them all back in data object.
            const EmailArr = r.filter(a => a.param === 'Email').map(a => a.msg);
            const NameArr =    r.filter(a => a.param === 'Name').map(a => a.msg);            
            const MessageArr =  r.filter(a => a.param === 'Message').map(a => a.msg);
            const data = { t:1, vali: {
                Name:NameArr,
                Email:EmailArr,                
                Message:MessageArr
            }};            
        res.json(data);
    } else {
        let Name = req.body.Name;
        let Email = req.body.Email;        
        let Message = req.body.Message;
        function after(err) {            
            if (err) {
                console.error(err);
                res.json({ t:2 });
            } else {
                res.json({ t:0, vali: [] });
            }
            
        }
        MESSAGEDATABASE.addmessage(Name, Email, Message, after );                                 
    }        
} catch (err) {
    console.error(err);
    res.json({ t:2 });
}
});


module.exports = ROUTER;