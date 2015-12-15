// Keven Panchal, November 26th 2015, ICS3OR-C

//login 

function login() {
    var user = $("#username").val();
    var pass = $("#password").val();
    var setuser = "hi";
    var setpass = "360";
    if ((user === setuser) && (pass === setpass)) {
        window.location = "Welcome_teacher.html";
        return false; 
    }
    else { 
        alert("login as failed, check username and password and try again!");
}
}


//array set-up
var announcement = [];

var index = 0; 
//array starts when post button is pressed
function  getData() { 
    announcement[index] = 
  { 
    // fields for array     
    clubname: $("#clubname").val(), 
    gender: $("#genderstudent").val(), 
    date: $("#date").val(), 
    category: $("#clubnamestudent").val(), 
    announcement: $("#post").val()
    
    
    }; 
    
  // local storage and stringify set-up
    var storeObject = JSON.stringify(announcement); 
    localStorage.setItem("announcementInfo", storeObject);
    
    index ++; 
    
    }; 