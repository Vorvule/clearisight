// PICK
function pickUnit(classToHide, indexToShow) {
  var classList = document.getElementsByClassName(classToHide);
  for (var i = 0; i < classList.length; i++) {
    classList[i].style.display = "none";
  }
  classList[indexToShow].style.display = "block";
}

// CURSOR
function toggleCursor() {
  if (cont.style.cursor == "none") cont.style.cursor = "default";
  else cont.style.cursor = "none";
}

// THEMES
function toggleTheme() {
  var html = document.getElementsByTagName("html")[0];
  var buttons = document.getElementsByTagName("button");
  switch(theme) {
    case "dark": {
      html.style.backgroundColor = "rgb(255, 255, 240)";
      html.style.color = "rgb(17, 17, 17)";
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "rgb(255, 255, 225)";
        buttons[i].style.color = "rgb(34, 34, 34)";
      }
      cont.style.backgroundColor = "rgb(255, 255, 225)";
      anim.style.backgroundColor = "rgb(0, 128, 128)";
      theme = "light";
      break;
    }
    case "light": {
      html.style.backgroundColor = "rgb(17, 17, 17)";
      html.style.color = "rgb(238, 238, 238)";
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.color = "rgb(221, 221, 221)";
        buttons[i].style.backgroundColor = "rgb(34, 34, 34)";
      }
      cont.style.backgroundColor = "rgb(0, 0, 0)";
      anim.style.backgroundColor = "rgb(255, 215, 0)";
      theme = "dark";
    }
  }
}

// MUSIC
function toggleAllowMusic() {
  if (musicAllowed) {
    musicAllowed = false;
    aud.pause();
  }
  else {
    musicAllowed = true;
    if (animationStatus == "playing") aud.play();
  }
}

// ALLOW FULLSCREEN
function toggleAllowFullscreen() {
  if (fullscreenAllowed) fullscreenAllowed = false;
  else {
    fullscreenAllowed = true;
    if (animationStatus == "playing") openFullscreen();
  }
}

// FULLSCREEN
function openFullscreen() {
  if (cont.requestFullscreen) cont.requestFullscreen();
  else if (cont.mozRequestFullScreen) cont.mozRequestFullScreen(); // Firefox
  else if (cont.webkitRequestFullscreen) cont.webkitRequestFullscreen(); // Chrome|Safari|Opera
  else if (cont.msRequestFullscreen) cont.msRequestFullscreen(); // IE|Edge
}

function closeFullscreen() {
  if (document.mozCancelFullScreen) document.mozCancelFullScreen();
  else if (document.exitFullscreen) document.exitFullscreen();
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  else if (document.msExitFullscreen) document.msExitFullscreen();
}

// ALLOW NEXT SET
function toggleAllowNextSet() {
  if (nextSetAllowed) nextSetAllowed = false;
  else nextSetAllowed = true;
}

// MAIL
function sendMail() {
  var a = document.getElementsByClassName('mail');
  var x = new XMLHttpRequest();
  x.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText) resetForm();
    }
};
  x.open("POST", "common/send.php", true);
  x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  x.send("Name=" + a[0].value + "&Email=" + a[1].value + "&Subject=" + a[2].value + "&Comment=" + a[3].value);
}

function resetForm() {
  document.getElementById("mailForm").reset();
}

function toggleMail() {
  var mailButtons = document.getElementById("mailButtons");
  if (mailButtons.style.display == "none") {
    mailButtons.style.display = "block";
    pickUnit('container', 1);
  }
  else {
    mailButtons.style.display = "none";
    pickUnit('container', 0);
  }
}

// LIGHTING
function highLight(focusClass, activeIndex) {
  var group = document.getElementsByClassName(focusClass);
  for (var i = 0; i < group.length; i++) {
    group[i].classList.remove("active");
  }
  group[activeIndex].classList.add("active");
}

function toggleLight(focusClass, activeIndex) {
  var button = document.getElementsByClassName(focusClass)[activeIndex];
  if (button.classList.contains("active")) {
    button.classList.remove("active");
  } else {
    button.style.color = null;
    button.classList.add("active");
  }
}

// COLORS
/*
function changeBallcolor(val) {
  anim.style.backgroundColor = val;
}

function changeBackcolor(val) {
  cont.style.backgroundColor = val;
}

document.getElementById("ballcolor").value = "#FFD700";
document.getElementById("backcolor").value = "#000000";
*/