/* js/music.js */
/*let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playpause = 1;*/

function audioloaded(){
/* Initialize progress bar and duration */
song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
  var time = Math.floor(progress.max / 60) + ":" + Math.round(progress.max % 60);
  document.getElementById("minid").innerHTML = convertToDigitalTime(time);
};
gonderme();
testdiger();
}

/* Play/pause toggle */
function playPause() {
  if(playpause==1)
  {
    playpause = 0;
    song.play();
    document.getElementById("control-icon").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" class="bi bi-pause-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/></svg>';
  }else{
    playpause = 1;
    song.pause();
    document.getElementById("control-icon").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>';
  }
}

/* Forward the song by 5 seconds */
function forward() {
  song.currentTime+=5;
}

/* Rewind the song by 5 seconds */
function rewind() {
  song.currentTime-=5;
}

function gonderme(){
/* Update progress bar and current time display */
musicint = setInterval(() => {
  progress.value = song.currentTime;
  time = Math.floor(progress.value / 60)+":"+progress.value % 60;;
  digital = convertToDigitalTime(time)
  document.getElementById("progresspid").innerHTML = digital;
  if(progress.value>=Math.round(progress.max))
  {
    playpause = 1;
    song.pause();
    document.getElementById("control-icon").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>';
    song.currentTime = 0;
  }
}, 1000);
}

function testdiger(){
/* Change song's current time based on progress bar */
progress.onchange = function() {
  song.currentTime = progress.value;
};
}

/* Convert time to digital format (e.g., 01:05) */
function convertToDigitalTime(time) {
  // Split the time into hours and minutes
  var timeArray = time.split(":");
  
  // Get the hour and minute values
  var hour = parseInt(timeArray[0]);
  var minute = parseInt(timeArray[1]);

  // Convert to two-digit format
  var hourStr = hour.toString().padStart(2, "0");
  var minuteStr = minute.toString().padStart(2, "0");

  // Convert to digital time format
  var digitalTime = hourStr + ":" + minuteStr;

  return digitalTime;
}

function musiclisten(){
  document.getElementById("song").addEventListener("error", () => {
  alert();
  errorscreen();
  clearInterval(musicint);
  });
  
  document.getElementById("song").play().catch(error => {
  errorscreen();
  clearInterval(musicint);
  });
}