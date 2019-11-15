function getTimeForLastModified()
{
    document.getElementById("content2").innerHTML = "Last updated : "+ document.lastModified;
}

function myTimer(){
    var sec = 1;
    var min =0;
    var timer = setInterval(function(){
        document.getElementById("content3").innerHTML= min +':'+sec;
        sec++;
        if(sec== 59)
        {
            sec = 0;
            min += 1;
        }
        
    } ,1000);
}