//A function at carries out the click event
var startButton = document.querySelectorAll('button')[0];
startButton.addEventListener("click", function(){


// To generate a random number for the two dics
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  //To select the picture from the document
  var image1 = document.querySelectorAll('img')[0];
  var image2 = document.querySelectorAll('img')[1];

  //Now I use the random number to select the picture

  randomImageSrc1 = "images/dice" + randomNumber1 + ".png";
  randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

  //Here I set the setAttribute to change the dics
  var selectImage1 = image1.setAttribute("src", randomImageSrc1);
  var selectImage2 = image2.setAttribute("src", randomImageSrc2);


//Here I put the heading 1 into a variable heading
  var heading = document.getElementById("h1");


//Here is the logic behind this dics game
if (randomImageSrc1 > randomImageSrc2){
  heading.innerHTML = "Player 1 wins";
}

else if (randomImageSrc1 < randomImageSrc2) {
  heading.innerHTML = "Player 2 wins";
}
else{
  heading.innerHTML = "Draw";
}
});
