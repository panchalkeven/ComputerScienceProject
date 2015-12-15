var field= "";
var field2 = "";
var field3 = "";
var field4 = "";
var field5 = "";

// Local Storage Setup

function viewPost() {
    var temp= localStorage.getItem("announcementInfo");
    var post= JSON.parse(temp);
    
// Display Filter
    var clubchoice;
    var genderchoice;
    var field= "";
    var field2 = "";
    var field3 = "";
    var field4 = "";
    var field5 = "";
    
// For loop and variables 
    
    for ( var i=0; i < 7; i++ ){
        clubchoice = document.getElementById("clubnamestudent").value
        genderchoice = document.getElementById("genderstudent").value
       
// If user filters Culb name AND Gender 
        
        if (clubchoice === post[i].category && genderchoice === post[i].gender){
            field += post[i].category + "<br>";
            field2 += post[i].date + "<br>";
            field3 += post[i].clubname + "<br>";
            field4 += post[i].insertpost + "<br>";
            field5 += post[i].gender + "<br>";

            // Display spesific information posted by teacher
            document.getElementById("clubname").innerHTML = field;
            document.getElementById("time").innerHTML = field2;
            document.getElementById("club").innerHTML = field3;
            document.getElementById("post").innerHTML = field4; 
            document.getElementById("gender1"). innerHTML = field5;
        }

// If User only selects one type of filter
        
            if (clubchoice === post[i].clubname && genderchoice === "All") {
            field += post[i].title + "<br>";
            field2 += post[i].date + "<br>";
            field3 += post[i].clubname + "<br>";
            field4 += post[i].insertpost + "<br>";
            field5 += post[i].gender + "<br>";

            // Display spesific information posted by teacher
            document.getElementById("title").innerHTML = field;
            document.getElementById("time").innerHTML = field2;
            document.getElementById("club").innerHTML = field3;
            document.getElementById("post").innerHTML = field4; 
            document.getElementById("gender1"). innerHTML = field5;
        }
        
            if (clubchoice === "All" && genderchoice === post[i].gender) {
            field += post[i].title + "<br>";
            field2 += post[i].date + "<br>";
            field3 += post[i].clubname + "<br>";
            field4 += post[i].insertpost + "<br>";
            field5 += post[i].gender + "<br>";

            document.getElementById("title").innerHTML = field;
            document.getElementById("time").innerHTML = field2;
            document.getElementById("club").innerHTML = field3;
            document.getElementById("post").innerHTML = field4; 
            document.getElementById("gender1"). innerHTML = field5;
        }
        
// If there is no Filter!
        if (clubchoice === "All" && genderchoice === "All") {
            field += post[i].title + "<br>";
            field2 += post[i].date + "<br>";
            field3 += post[i].clubname + "<br>";
            field4 += post[i].insertpost + "<br>";
            field5 += post[i].gender + "<br>";

            // Display spesific information posted by teacher
            document.getElementById("title").innerHTML = field;
            document.getElementById("time").innerHTML = field2;
            document.getElementById("club").innerHTML = field3;
            document.getElementById("post").innerHTML = field4; 
            document.getElementById("gender1"). innerHTML = field5;
        }
    }   
}