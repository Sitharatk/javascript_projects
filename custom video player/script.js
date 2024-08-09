let playBtn =document.getElementById("play-btn");
let video= document.querySelector(".video");
let  progressbar = document.querySelector(".progress-bar")
let progressRange=document.querySelector(".progress-range")
let isVideoPlaying = false;



function PlayOrPausevideo(){
    if(!isVideoPlaying){
        video.play();
        isVideoPlaying=true;
        playBtn.classList.replace("fa-play","fa-pause");

    }
    else{
        video.pause();
        isVideoPlaying=false;
        playBtn.classList.replace("fa-pause","fa-play");
    }
  
}
function handleKeydown(event) {
    if (event.code === 'Space') { // Check if the space bar is pressed
        event.preventDefault(); // Prevent default action (scrolling)
        PlayOrPausevideo(); // Toggle play/pause
    }else if (event.code === 'ArrowLeft') { // Left arrow key skips back 10 seconds
        event.preventDefault(); // Prevent default action (scrolling)
        video.currentTime = Math.max(0, video.currentTime - 3); // Move back 10 seconds, but not before the start
   }else if (event.code === 'ArrowRight') { // Left arrow key skips back 10 seconds
        event.preventDefault(); // Prevent default action (scrolling)
        video.currentTime = Math.max(0, video.currentTime + 3); // Move back 10 seconds, but not before the start
}
}
function updateProgressbar(event){
    let width=(event.target.currentTime/event.target.duration)*100;
    // console.log(event.target.currentTime,event.target.duration);
    progressbar.style.cssText=`width:${width}%`

}
function updateSeekbar(event){


    let currentPointer=event.offsetX;
    let progressbarWidth = this.clientWidth;
 
    let currentRange =(event.offsetX/event.target.clientWidth) * video.duration;
    video.currentTime=currentRange;
    // console.log(event.offsetX,event.target.clientWidth)

}

playBtn.addEventListener("click",PlayOrPausevideo);
video.addEventListener("click",PlayOrPausevideo);
// document.addEventListener("keydown", handleKeydown);
video.addEventListener("timeupdate",updateProgressbar);

progressRange.addEventListener("click",updateSeekbar);
document.addEventListener("keydown", handleKeydown);
