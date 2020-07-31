// message to our visitor
alert("This is a show of the power of algorithm. Try to press the 'Roll It' button at least 3 times and you'll know the true power lies within the word algorithm!")

// button click
document.querySelector(".roll").addEventListener("click", diceClick);
function diceClick() {
  // randomize the dice by random number generator for your dice
  let randNum1 = Math.floor(Math.random() * 6) + 1;
  let randDiceImg = randNum1 + ".png";
  let randDiceImgDir = "images/" + randDiceImg;
  let yourDice = document.querySelectorAll("img")[0];
  yourDice.setAttribute("src", randDiceImgDir);
  
  // dice selector for algo dice
  let algoDiceImg = 6;
  if (randNum1 < 6) {
    algoDiceImg = randNum1 + 1;
  }
  let randDiceImgDir2 = "images/" + algoDiceImg + ".png";
  let algoDice = document.querySelectorAll("img")[1].setAttribute("src", randDiceImgDir2); 
}

