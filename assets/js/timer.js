var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0";
    document.getElementById("count").innerHTML = "Generating download link...";
    document.getElementById("button").classList.add("hide");
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
    document.getElementById("count").innerHTML = "Download link generated!";
  }
  timeleft -= 1;
}, 1000);