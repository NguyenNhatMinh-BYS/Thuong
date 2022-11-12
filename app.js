var icon=document.getElementById('icon');
// var test=document.getElementsByClassName('music');
var play=document.getElementById('myAudio');

icon.onclick=function(){


  if(play.paused){
    play.play();
    icon.src="./pause.png";
  }
  else{
    play.pause();
    icon.src="./play.png";
  }
}
