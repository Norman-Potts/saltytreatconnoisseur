

 


const Arrmonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];


function getnowYYYYMMDDHHMMSSMI() {
	let now     = new Date(); 
	let year    = now.getFullYear();
	let month   = now.getMonth()+1; 
	let day     = now.getDate();
	let hour    = now.getHours();
	let minute  = now.getMinutes();
	let second  = now.getSeconds(); 
	let milisecond = now.getMilliseconds();
	if(month.toString().length == 1) {
		 month = '0'+month;
	}
	if(day.toString().length == 1) {
		 day = '0'+day;
	}   
	if(hour.toString().length == 1) {
		 hour = '0'+hour;
	}
	if(minute.toString().length == 1) {
		 minute = '0'+minute;
	}
	if(second.toString().length == 1) {
		 second = '0'+second;
	}   
	if(milisecond.toString().length == 1) {
		milisecond = '00'+milisecond;
	} else if (milisecond.toString().length == 2 ) {
		milisecond = '0'+milisecond;
	}
	let YYYYMMDDHHMMSSMI = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second+':'+milisecond+'';
	return YYYYMMDDHHMMSSMI;
}

function getTimeHHMMSSMM() {
	let now     = new Date();  
	let hour    = now.getHours();
	let minute  = now.getMinutes();
	let second  = now.getSeconds(); 
	let milisecond = now.getMilliseconds();
	if(hour.toString().length == 1) {
		hour = '0'+hour;
   	}
   	if(minute.toString().length == 1) {
		minute = '0'+minute;
   	}
   	if(second.toString().length == 1) {
		second = '0'+second;
	} 
	if(milisecond.toString().length == 1) {
		milisecond = '00'+milisecond;
	} else if (milisecond.toString().length == 2 ) {
		milisecond = '0'+milisecond;
	} 
	var hhmmssmm = ''+hour+':'+minute+':'+second+':'+milisecond+'';
	return hhmmssmm;
}





function getTodayyyymmdd() {
	var todaysdate = new Date();
	var dd = todaysdate.getDate();
	var m = todaysdate.getMonth(); /* January is 0! */
	var yyyy = todaysdate.getFullYear()
	var mm = m+1;
	if(dd<10) {  dd = '0'+dd;  }
	if(mm<10) {  mm = '0'+mm;  }
	var yyyymmdd =  yyyy+"-"+mm+"-"+dd;
	return yyyymmdd;
}

function getDisplayDateOfToday() {
	var todaysdate = new Date();
	var dd = todaysdate.getDate();
	var m = todaysdate.getMonth(); //January is 0!
	var yyyy = todaysdate.getFullYear()
	var mm = m+1;
	if(dd<10) {  dd = '0'+dd;  }
	if(mm<10) {  mm = '0'+mm;  }
	var yyyymmdd =  yyyy+"-"+mm+"-"+dd;
	var today = yyyymmdd;
	var displaydate = ""+yyyy+"-"+Arrmonths[m]+"-"+dd;
	return displaydate;
}
////  Shuffles array in place.
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
//// Creates a yyyy-mm-dd date with a given date.
function makeYYYMMDDwithDate( Le_date ) {
	var dd = Le_date.getDate();
	var m = Le_date.getMonth(); /* January is 0! */
	var yyyy = Le_date.getFullYear()
	var mm = m+1;
	if(dd<10) {  dd = '0'+dd;  }
	if(mm<10) {  mm = '0'+mm;  }
	var La_date =  yyyy+"-"+mm+"-"+dd;
	return La_date;
}
 
function getGivenDisplayDate( yyyymmdd ) {
	var todaysdate =  new Date(""+yyyymmdd+"T00:00:00");
	var dd = todaysdate.getDate();
	var m = todaysdate.getMonth(); //January is 0!
	var yyyy = todaysdate.getFullYear()
	var mm = m+1;
	if(dd<10) {  dd = '0'+dd;  }
	if(mm<10) {  mm = '0'+mm;  }
	var yyyymmdd =  yyyy+"-"+mm+"-"+dd;
	var today = yyyymmdd;
	var displaydate = ""+yyyy+"-"+Arrmonths[m]+"-"+dd;
	return displaydate;
}
function converDisplayDateToYYYMMDD( ddisplayddate ) {
	var arr = ddisplayddate.split("-");
	var month = arr[1];
	var m = Arrmonths.indexOf( month );
	m = m+1;
	if(m<10) {  m = '0'+m;  }
	var yyyymmdd =  arr[0]+"-"+m+"-"+arr[2];
	return yyyymmdd;
}
//// validates emails.
function validateEmail( givenEmail ){
  var flag = false; var firstpass = /^[A-Z0-9@._%+-]{6,254}$/i; // No invalid characters. Not to big or to short.
	var pattnemail = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;  
  if ( firstpass.test(givenEmail) == true ) {    
     flag = ( pattnemail.test(givenEmail) )? true : false;    
  } else {
    flag = false;    
  }  	
	return flag;
}
function validatepassword(p){  
  var firstpass = /^[A-Za-z0-9 ~!@#$%\^&*_\-+=`|\\\(\){}\[\]:;"'<>,\.?\/]{9,21}$/;
  var flag = ( firstpass.test(p) )? true : false;        	
	return flag;
}
function validateToken(t) {
  var tokentest = /^[A-Z0-9]{32}$/i;
  var flag = ( tokentest.test(t) )? true : false;        	
  return flag;
}


///Generates an activation token.
function generateToken() {
	var token = '';   var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 32; i > 0; --i) 
	{  token += chars[Math.round(Math.random() * (chars.length - 1))];  }           
	return token;
}


function isNumberic(item) {
	var test = /^[0-9]+$/;
	var flag = ( test.test(item) )? true : false;        	
	return flag;
}


 





var helpers = {
	getTimeHHMMSSMM:getTimeHHMMSSMM,
	getnowYYYYMMDDHHMMSSMI:getnowYYYYMMDDHHMMSSMI,
	getTimeHHMMSSMM:getTimeHHMMSSMM,
  getTodayyyymmdd:getTodayyyymmdd,
  getDisplayDateOfToday:getDisplayDateOfToday,
  shuffle:shuffle,
  makeYYYMMDDwithDate:makeYYYMMDDwithDate,
  getGivenDisplayDate:getGivenDisplayDate,
  converDisplayDateToYYYMMDD:converDisplayDateToYYYMMDD,
  validateEmail:validateEmail,
  validatepassword:validatepassword,
  validateToken:validateToken,
  generateToken:generateToken,
  isNumberic:isNumberic,
};
module.exports = helpers;