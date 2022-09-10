function myFunction() {
    var element = document.getElementById("my-navbar-all");
    element.classList.toggle("responsive");
}


document.getElementById("video-btn").onclick=function() {
    // document.getElementsByClassName("video-btn-div").style.display="none";
    console.log("click");
    if (myVideo.paused) {
        myVideo.play();
        ppbutton.innerHTML = "Pause";
    }
    else  {
        myVideo.pause(); 
        ppbutton.innerHTML = "Play";
    }
}