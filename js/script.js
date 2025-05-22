/* js/script.js */
infotype = "image";
musicint = "";
function fileplay(adress, type, name)
{
  clearInterval(musicint);
  infotype = type;
  getfilename = name;
  getfileadress = adress;
  if(type=="image")
  {
    document.getElementById("containerid").innerHTML = `<img id="imageid" class="image" src="`+adress+`" alt="Image">`;
    imagelisten();
  }
  
  else if(type=="video")
  {
    document.getElementById("containerid").innerHTML = `
    <div class="video-container" onclick="toggleControls()">
    <video id="myVideo" src="`+adress+`" playsinline></video>
    
    <div id="controls" class="controls-overlay">
    <div class="playsvgdiv">
    <svg class="playsvg" onclick="togglePlay()" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e3e3e3"><path id="playpausepath" d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
    </div>
    <div class="videotools">
    <svg onclick="seek(-10)" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM360-320v-180h-60v-60h120v240h-60Zm140 0q-17 0-28.5-11.5T460-360v-160q0-17 11.5-28.5T500-560h80q17 0 28.5 11.5T620-520v160q0 17-11.5 28.5T580-320h-80Zm20-60h40v-120h-40v120Z"/></svg>
    <svg onclick="seek(10)" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="M360-320v-180h-60v-60h120v240h-60Zm140 0q-17 0-28.5-11.5T460-360v-160q0-17 11.5-28.5T500-560h80q17 0 28.5 11.5T620-520v160q0 17-11.5 28.5T580-320h-80Zm20-60h40v-120h-40v120ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800h6l-62-62 56-58 160 160-160 160-56-58 62-62h-6q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440h80q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/></svg>
    <p class="videotime" id="timeDisplay">00:00</p>
    <div class="progress-container" id="progressContainer">
    <div class="progress-bar" id="progressBar"></div>
    </div>
    <p class="videotime" id="timeDisplay2">00:00</p>
    <svg onclick="muted()" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path id="mutesvgid" d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/></svg>
    </div>
    </div>
    </div>
    `;
    
    video = document.getElementById('myVideo');
    controls = document.getElementById('controls');
    let controlsVisible = false;
    let hideTimeout;
    
     progressBar = document.getElementById('progressBar');
     progressContainer = document.getElementById('progressContainer');
     timeDisplay = document.getElementById('timeDisplay');
     timeDisplay2 = document.getElementById('timeDisplay2');
     initVideoControl();
     videolisten();
  }
  
  else if(type=="music")
  {
    document.getElementById("containerid").innerHTML = `
    <div class"musiccontainer">
      <div class"musiccontainer2">
        <div class="musicnotediv">
          <svg class="musicnote" xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#ffffff"><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"/></svg>
        </div>
        <div class="playpausediv" >
        <span onclick="rewind()">
        <!-- Rewind button -->
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
        <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" />
        </svg>
        </span>
        
        <span onclick="playPause()" id="control-icon">
        <!-- Play button -->
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
        </svg>
        </span>
        
        <span onclick="forward()">
        <!-- Forward button -->
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" class="bi bi-skip-forward-fill" viewBox="0 0 16 16">
        <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z" />
        </svg>
        </span>
        <br>
        <!-- Audio source -->
        <audio id="song">
        <source src="`+adress+`" type="audio/mpeg">
        </audio>
        <!-- Progress bar -->
        <input type="range" value="0" id="progress">
        
        <!-- Duration display -->
        <div class="mscdurationsdiv">
        <div class="mscdurationleft">
        <p class="musicdur" id="progresspid" >00:00</p>
        </div>
        <p class="musicdur" id="minid" >Loading...</p>
        </div>
        </div>
      </div>
    </div>
    `;
     progress = document.getElementById("progress");
     song = document.getElementById("song");
     playpause = 1;
     audioloaded();
  }
  
  else if(type=="font")
  {
    var style = document.createElement('style');
    style.innerHTML = `
      @font-face {
        font-family: "MyFont";
        src: url("`+adress+`");
      }
    `;
    document.head.appendChild(style);
    document.getElementById("containerid").innerHTML = `<p class="font" id="fontid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt justo nec neque mollis, ac placerat felis scelerisque. Nunc consequat augue sit amet velit sollicitudin, ac posuere felis euismod. Donec vestibulum volutpat dolor, sit amet volutpat justo suscipit sit amet. Integer ac est vitae elit facilisis laoreet. Phasellus malesuada augue at ligula gravida, eu sollicitudin libero efficitur.</p>`;
  }
}


function infoopen()
{
  document.getElementById('modalid').style.display = 'block';
  if(getfilename=="")
  {
    getfilename = "(unkown)";
  }
  
  if(infotype=="image")
  {
    document.getElementById("infodet1id").textContent = getfilename;
    document.getElementById("infodet2id").textContent = imageid.naturalWidth+" × "+imageid.naturalHeight;
    document.getElementById("infodet3id").textContent = getfileadress;
    document.getElementById("infodet4id").textContent = ((imageid.naturalWidth*imageid.naturalHeight)/1000000).toFixed(2)+" MP";
  }
  
  else if(infotype=="video")
  {
    document.getElementById("infodet1id").textContent = getfilename;
    document.getElementById("infodet2id").textContent = myVideo.videoWidth+" × "+myVideo.videoHeight;
    document.getElementById("infodet3id").textContent = getfileadress;
    document.getElementById("infodet4id").textContent = Math.min(myVideo.videoWidth, myVideo.videoHeight)+"P ("+((myVideo.videoWidth*myVideo.videoHeight)/1000000).toFixed(2)+" MP)";
  }
  
  else if(infotype=="music")
  {
    document.getElementById("imageid");
    document.getElementById("infodet1id").textContent = getfilename;
    document.getElementById("infodet2id").textContent = "(null)";
    document.getElementById("infodet3id").textContent = getfileadress;
    document.getElementById("infodet4id").textContent = "(null)";
  }
  
  else if(infotype=="font")
  {
    document.getElementById("imageid");
    document.getElementById("infodet1id").textContent = getfilename;
    document.getElementById("infodet2id").textContent = "(null)";
    document.getElementById("infodet3id").textContent = getfileadress;
    document.getElementById("infodet4id").textContent = "(null)";
  }
}

function infoclose()
{
  document.getElementById('modalid').style.display = 'none';
}



function errorscreen(){
  document.getElementById("containerid").innerHTML = `
  <div class="errordiv">
  <p class="errorp">Media cannot be played! This issue may be caused by one of the following:<br>• The file might be missing (404 error),<br>• The file path may be incorrect,<br>• Your browser might not support this media format.<br><br>Please refresh the page and try again. If the problem persists, contact support.</p>
  </div>
  `;
      }
