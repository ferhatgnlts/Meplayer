/* js/video.js */
let controlsVisible = false;
let hideTimeout;

  function toggleControls() {
    if (controlsVisible) {
      hideControls();
    } else {
      showControls();
    }
  }

  function showControls() {
    //document.getElementById("playpausepath").setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
    controls.style.display = 'flex';
    controlsVisible = true;
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(hideControls, 5000);
  }

  function hideControls() {
    controls.style.display = 'none';
    controlsVisible = false;
  }

  function togglePlay() {
    if (video.paused) {
      video.play();
      document.getElementById("playpausepath").setAttribute('d', 'M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z');
    } else {
      video.pause();
      document.getElementById("playpausepath").setAttribute('d', 'M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z');
    }
    showControls();
  }

  function seek(seconds) {
    video.currentTime += seconds;
    updateTimeDisplay();
    showControls();
  }
  
  
  /*
  Cover
  */
  function initVideoControl(){
  initVideoControl2();
  // İlerleme çubuğu güncelleme
  video.addEventListener('timeupdate', updateProgressBar);
  //const video = document.getElementById('myVideo');
  // Video yüklenince
   video.addEventListener('loadedmetadata', () => {
  // Başlangıç zamanına git
  video.currentTime = 0;
 // });
  
  // Zaman değişimi tamamlanınca
 // video.addEventListener('seeked', () => {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  
  // Artık güvenle çizebiliriz
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  // Poster olarak ata
  const dataURL = canvas.toDataURL();
  video.poster = dataURL;
  
  // Videoyu durdur (istenirse)
  video.pause();
  updateTimeDisplay();
  });
  }
  
  
//Video mute
function muted()
{
  video.muted = !video.muted;
  if(video.muted)
  {
    document.getElementById("mutesvgid").setAttribute('d', 'M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z');
  } else {
    document.getElementById("mutesvgid").setAttribute('d', 'M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z');
  }
}


function initVideoControl2(){
progressContainer.addEventListener('click', (e) => {
            const pos = (e.pageX - progressContainer.offsetLeft) / progressContainer.offsetWidth;
            video.currentTime = pos * video.duration;
            updateTimeDisplay();
        });
        }
        
       function updateProgressBar() {
       const percentage = (video.currentTime / video.duration) * 100;
       progressBar.style.width = percentage + '%';
       updateTimeDisplay();
       if(video.currentTime>=video.duration)
       {
         video.pause();
         document.getElementById("playpausepath").setAttribute('d', 'M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z');
         showControls();
       }
       }
       
       function updateTimeDisplay() {
       const currentMins = Math.floor(video.currentTime / 60);
       const currentSecs = Math.floor(video.currentTime % 60);
       const durationMins = Math.floor(video.duration / 60);
       const durationSecs = Math.floor(video.duration % 60);
       
       timeDisplay.textContent = 
       `${padTime(currentMins)}:${padTime(currentSecs)}`;
       timeDisplay2.textContent = 
       `${padTime(durationMins)}:${padTime(durationSecs)}`;
       }
       
       function padTime(time) {
       return time < 10 ? '0' + time : time;
       }
       
       function videolisten(){
         document.getElementById("myVideo").addEventListener("error", () => {
           errorscreen();
         });
       }