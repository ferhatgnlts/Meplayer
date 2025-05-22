/* js/image.js */
function imagelisten(){
  document.getElementById("imageid").addEventListener("error", () => {
    errorscreen();
  });
}