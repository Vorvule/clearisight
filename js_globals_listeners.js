var aud = document.getElementById("aud");
var cont = document.getElementsByClassName("container")[0];
var anim = document.getElementById("animate");

var musicAllowed = false;
var fullscreenAllowed = false;
var theme = "dark";
var nextSetAllowed = false;

var animationStep = -1;
var currentSet = 0;
var animationSet = animationSets[currentSet];
var animationStatus = "stopped"; // "paused", "changed", "playing"

cont.addEventListener("click", toggleAnimation);
anim.addEventListener("animationend", nextStep);
anim.addEventListener("webkitAnimationEnd", nextStep);

cont.addEventListener("fullscreenchange", toggleCursor);
cont.addEventListener("mozfullscreenchange", toggleCursor); // Firefox
cont.addEventListener("webkitfullscreenchange", toggleCursor); // Chrome|Safari|Opera
cont.addEventListener("msfullscreenchange", toggleCursor);// IE|Edge