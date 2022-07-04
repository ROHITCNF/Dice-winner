var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var random_dice_image1="dice"+randomNumber1+".png";
var random_source_image1="images/"+random_dice_image1;


var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var random_dice_image2="dice"+randomNumber2+".png";
var random_source_image2="images/"+random_dice_image2;


//now change the img attributes
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",random_source_image1);

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",random_source_image2);


//now change the title
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player2 wins";
}
else{
  document.querySelector("h1").innerHTML="Match draw";
}
