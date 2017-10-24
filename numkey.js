// var body = document.body
// var memory = []
//
// // for (let i=1;i<10;i++){
//   // var para = document.createElement('button');
//   // para.textContent = i;
//   // para.onclick = function(){
//   //   console.log(i);
//   //   memory.push(i);
//   // }
//
//   body.appendChild(para);
// }
// var memoryButton = document.createElement('button');
// memoryButton.textContent = 'm';
// memoryButton.onclick = function(){console.log(memory)}
// body.appendChild(memoryButton);
var cpuScreen = document.querySelector('#cpuScreen');
var userScreen = document.querySelector('#userScreen');
var keypadGrid = document.querySelector('.keypadGrid');
var key = document.querySelectorAll('.key');


var numberPrompted = "345";
var step = 0;
var currentKeyPrompted = numberPrompted.charAt(step);
var keyPressed;
cpuScreen.textContent = numberPrompted


keypadGrid.onclick = function(event) {   //im using click as event, eventually ill add keystroke
  keyPressed = event.target.textContent;
  userScreen.textContent = userScreen.textContent + keyPressed
  if (keyPressed == currentKeyPrompted) {
    console.log("good at", step);
    step++;
    if (step==numberPrompted.length){console.log('OMG YOU ARE THE BEST')}
    currentKeyPrompted = numberPrompted.charAt(step)
  }
}



///
