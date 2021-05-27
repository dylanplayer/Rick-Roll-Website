


var video = document.getElementById("video");

function playPause() { 

  if (video.paused){

    video.play();
		document.getElementById("playPauseButton").textContent="Pause"
	}else{

    video.pause(); 
		document.getElementById("playPauseButton").textContent="Play"
	} 

}