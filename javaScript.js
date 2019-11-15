function getTimeForLastModified()
{
    document.getElementById("getTime").innerHTML = "Last updated : "+ document.lastModified;
}

function myTimer(){
    var sec = 0;
    var min =0;
    var timer = setInterval(function(){
        document.getElementById("getTime").innerHTML= min +':'+sec;
        sec++;
        if(sec== 59)
        {
            sec = 0;
            min += 1;
        }
        
    });
}