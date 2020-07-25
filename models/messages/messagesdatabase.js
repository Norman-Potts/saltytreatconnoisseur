const SQLITE3 = require("sqlite3").verbose();
const FS = require('fs');
const  MDB   = './models/messages/MDB.db'; 
const MYHELPERS = require('../../myhelpers.js');
const OS = require("os");
   

/** Create the database **/
function plzdomydbsetup(  ) { 
	 
	/** On start up, set up messages database. 
	 *  Currently deleted on start up.
	 */
	FS.access(MDB, FS.constants.R_OK | FS.constants.W_OK, (err) => { 
		if(!err)  { console.log(' Database messagesdatabase exists going to delete now. ');
			FS.unlink(MDB, (err) => { if (err) { console.log("Failed to delete database:"+err); }}); ////Do db delete MDB.
		} else { console.log(' Database messagesdatabase does not exist...'); }
		
		let db = new SQLITE3.Database(MDB);
		db.serialize(function() {
			db.run("DROP TABLE IF EXISTS messagesdatabase;");
			db.run("CREATE TABLE messagesdatabase (id INTEGER PRIMARY KEY AUTOINCREMENT, time TEXT,  jarrNameEmailMessage TEXT );");	
			console.log(" Database created.");
		});	 	 
	});//// End of MDB database creation.
	  

}//// End of function plzdomydbsetup



function addmessage(Name, Email,  Message, cb ) {
	try {
        let jarrNameEmailMessage = JSON.stringify([Name, Email,  Message]);
       
		let db = new SQLITE3.Database(MDB);
		let time = MYHELPERS.getnowYYYYMMDDHHMMSSMI();
		let INSERTstatement =  "INSERT INTO messagesdatabase ( id, time, jarrNameEmailMessage ) VALUES (?,?,json(?));"; 				
		let params =  [null,time,jarrNameEmailMessage];
		db.run( INSERTstatement, params, function(err) {
			if (err) {
				cb(err);								
			}
			else {
				//// get the last insert id
				//console.log(`A row has been inserted with rowid ${this.lastID}`);
				FS.appendFile('./models/messages/messages.txt', ""+params.toString()+OS.EOL, 'utf8',  function(err) {
					if (err) {
						cb(err);
					}else {
						cb(null);
					}
				});				
			}
		});
		db.close();		
	}catch(err) {
		console.error(err);
		cb(err);
	}	 
}




 

var messagesdatabase = {
   plzdomydbsetup:plzdomydbsetup,  
   addmessage:addmessage
}




module.exports = messagesdatabase;