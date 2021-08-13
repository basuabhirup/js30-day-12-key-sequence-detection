const sequenceArray = [];
const secretCode = "abhirup";

window.addEventListener("keyup", (e) => {
  sequenceArray.push(e.key);
  if(sequenceArray.length > secretCode.length){
    sequenceArray.shift();
  }
  console.log(sequenceArray);
  if(sequenceArray.join("").includes(secretCode)) {
    cornify_add();
  }
})
