$(document).ready(() => {
    $(".menu-content").hide();

    $("#menu").on("mouseenter", () =>{
        $(".menu-content").slideDown("slow");
    })
    $("header").on("mouseleave", () =>{
        $(".menu-content").slideUp("slow");
    })

    //If it's a new session, saving variables for later use.
    if(sessionStorage.getItem("start") == null){
        var startTime = Math.floor(Date.now() / 1000); //Getting start time in seconds
        var text = "Raleway"; //Declared variable to hold the choosen font

        sessionStorage.setItem("start", startTime); //storing startTime in sessionStorage for later use
        sessionStorage.setItem("typsnitt", text); //storing the font in sessionStorage 
    }

    
    updateFont();
    myTimer();
    getTimeForLastModified();

})

//Changing fontFamily in entire body.
function changeFont(){
    if(document.body.style.fontFamily === "Arial"){

        updateFont("Raleway");
        sessionStorage.setItem("typsnitt", "Raleway");
       
    }
    else{

        updateFont("Arial");
        sessionStorage.setItem("typsnitt", "Arial");

    }

}

//Sets choosen font everytime a new page is loaded
function updateFont(fontToBeChangeInto = sessionStorage.getItem("typsnitt")){

    $("body").css("font-family", fontToBeChangeInto);
    getAllButtons(fontToBeChangeInto);
   
}

//Gather all buttons for changing font
function getAllButtons(fontToBeChangeInto) 
{
    var buttonText = document.querySelectorAll("button");
    for(i = 0; i < buttonText.length; i++){
        buttonText[i].style.fontFamily = fontToBeChangeInto;
    }
    var fontShiftButton = document.getElementById("fontshift-button-p");
    fontShiftButton.style.fontFamily = fontToBeChangeInto;
}

//This function displays the last modified date on the webpage. 
//(Please note, this function will not work as expected in Chrome due to a bug. In Chrome it will display current date. This bug is reported to Google.)
function getTimeForLastModified()
{
    var date = new Date(document.lastModified);
    var dateToPrint = getFormattedDate(date);
    document.getElementById("footer-last-modified").innerHTML = "Uppdaterad: " + dateToPrint;
}

//This function changes the time to desired format of DD/MM/YYYY
function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    
    return day + "/" + month  + "/" + year;
  }

//This timer will estimate the time difference between the sessions start time and current time.
//It adds the diff to the timer and then the timer ticks on. The total session time is then 
//displayed on all webpages.
function myTimer(){
    var currentTime = Math.floor(Date.now() / 1000);
    var diff = currentTime - sessionStorage.getItem("start"); 
    var sec = (diff % 60); 
    var min = Math.floor(diff / 60);
    
    setInterval(function(){
        if(sec < 10){
            document.getElementById("footer-timer").innerHTML=  min +":" + "0"+ sec;
        }
        else{
            document.getElementById("footer-timer").innerHTML=  min +":" + sec;
        }
        sec++;
        if(sec == 60)
        {
            sec = 0;
            min += 1;
        }
    } ,1000);
}

