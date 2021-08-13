const sequenceArray = [];
const secretCode = "abhirup";

function playSound() {
  sound = new Audio("flashback.mp3");
  sound.play();
}

window.addEventListener("keyup", (e) => {
  sequenceArray.push(e.key);
  if(sequenceArray.length > secretCode.length){
    sequenceArray.shift();
  }
  if(sequenceArray.join("").includes(secretCode)) {
    cornify_add();
    playSound();
  }
})
