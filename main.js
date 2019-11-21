$(document).ready(() => {
    $(".menu-content").hide();

    $("#menu").on('click', () =>{
        $(".menu-content").fadeIn();
    })
    $("header").on('mouseleave', () =>{
        $(".menu-content").hide();
    })

    if(sessionStorage.getItem('start') == null){
        var startTime = Math.floor(Date.now() / 1000); //Getting starttime in seconds
        sessionStorage.setItem('start', startTime);
    }

    myTimer();
    getTimeForLastModified();
})

function getTimeForLastModified()
{
    var date = new Date(document.lastModified);
    var dateToPrint = getFormattedDate(date);
    document.getElementById("content2").innerHTML = "Senast uppdaterad: " + dateToPrint;
}

function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return day + '/' + month  + '/' + year;
  }

function myTimer(){
    var nowTime = Math.floor(Date.now() / 1000);
    var diff = nowTime - sessionStorage.getItem('start');  
    var sec = (diff % 60);
    var min = Math.floor(diff / 60);
    setInterval(function(){
        if(sec < 10){
            document.getElementById("content3").innerHTML=  min +':' + '0'+ sec;
        }
        else{
            document.getElementById("content3").innerHTML=  min +':' + sec;
        }
        sec++;
        if(sec== 60)
        {
            sec = 0;
            min += 1;
        }
    } ,1000);
}

function changeFont(){
    if(document.body.style.fontFamily === "Arial"){
        document.body.style.fontFamily = "Open Sans Condensed";
        var buttonText = document.querySelectorAll("button");
        for(i = 0; i < buttonText.length; i++){
            buttonText[i].style.fontFamily = "Open Sans Condensed";
        }
    }
    else{
        document.body.style.fontFamily = "Arial";
        var buttonText = document.querySelectorAll("button");
        for(i = 0; i < buttonText.length; i++){
            buttonText[i].style.fontFamily = "Arial";
        }
    }

}