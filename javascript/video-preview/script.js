console.log("page loaded...");
var video = document.getElementById("video.mp4")
function playVideo() {
    video.play();
    video.controls = true;
}
function pauseVideo() {
    video.pause();
    video.controls = true;
}
function playAudio() {
    video.muted = false;
}