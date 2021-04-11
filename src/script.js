window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".touchpad-sound");
  const pads = document.querySelectorAll(".touchpads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#000",
    "#3d3d3d",
    "#5e5d5d",
    "#868686",
    "#b3b3b3",
    "#cfcfcf",
  ];

  //let's add the sound here:
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });

  // create a function that makes bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
