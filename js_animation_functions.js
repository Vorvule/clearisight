// PLAY
function playAnimation() {
  switch (animationStatus) {
    case "stopped":
      animationStep = -1;
      animationSet = animationSets[currentSet];
      animationStatus = "playing";
      nextStep();
      break;
    case "paused":
      anim.style.animationPlayState = "running";
      anim.style.WebkitAnimationPlayState = "running";
      animationStatus = "playing";
      break;
    case "selected":
      stopAnimation();
      animationStep = -1;
      animationStatus = "playing";
      nextStep();
  }
  if (musicAllowed) aud.play();
  if (fullscreenAllowed) openFullscreen();
}

// NEXT STEP
function nextStep() {
  if (animationStatus != "stopped") {
    animationStep++;
    var step = animationSet[animationStep];
    if (step) {
      anim.style.animation = step;       // Standard
      anim.style.WebkitAnimation = step; // Chrome|Safari|Opera
    } else if (nextSetAllowed) {
      animationStep = 0;
      currentSet++;
      if (currentSet > 3) currentSet = 0;
      animationSet = animationSets[currentSet];
      step = animationSet[animationStep];
      anim.style.animation = step;       // Standard
      anim.style.WebkitAnimation = step; // Chrome|Safari|Opera
      highLight('g3',currentSet);
      } else stopAnimation();
  }
}

// PAUSE
function pauseAnimation() {
  aud.pause();
  anim.style.animationPlayState = "paused"; 
  anim.style.WebkitAnimationPlayState = "paused";
  if (animationStatus == "playing") animationStatus = "paused";
}

// CHANGE
function selectAnimation(val) {
  currentSet = Number(val);
  animationSet = animationSets[currentSet];
  animationStatus = "selected";
}

// STOP
function stopAnimation() {
  if (animationStatus != "stopped") {
    pauseAnimation();
    animationStatus = "stopped";
    anim.style.animation = "appearance_middle_center 4s 1";
    anim.style.WebkitAnimation = "appearance_middle_center 4s 1";
    animationStep = -1;
    aud.load();
    closeFullscreen();
    highLight('g2',0);
  }
}

// TOGGLE
function toggleAnimation() {
  if (animationStatus == "playing") {
    pauseAnimation();
    highLight('g2', 1);
    animationStatus = "paused";
  }
  else {
    playAnimation();
    highLight('g2', 2);
    animationStatus = "playing";
  }
}