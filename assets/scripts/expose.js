// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() { 
}

const selectHorn = document.querySelector('#horn-select'); 

var currHorn; //the horn currently selected

//set up the image and audio files when selection is made by users
selectHorn.addEventListener('change', (event) => {
  const elem = document.querySelector('.hidden');
  var arrImg = document.images;
  arrImg[0].src=`assets/images/${event.target.value}.svg`;
  elem.src=`assets/audio/${event.target.value}.mp3`;
  currHorn=event.target.value;
});

const selectIcons = document.querySelector('#volume-controls'); 

//switch the volume image according to the swapping button and set the volume value correctly
selectIcons.addEventListener('input', (event) => {
  const elem = document.querySelector(".hidden")
  var volume = event.target.value;
  var arrImg = document.images;
  if (volume==0){
    arrImg[1].src = "assets/icons/volume-level-0.svg";
  }
  else if (volume>=1 && volume<33){
    arrImg[1].src = "assets/icons/volume-level-1.svg";
  }
  else if (volume>=33 && volume<67){
    arrImg[1].src = "assets/icons/volume-level-2.svg";
  }
  else{
    arrImg[1].src = "assets/icons/volume-level-3.svg";
  }
  elem.volume=volume/100;
})

const playSound = document.querySelector('button');

//play the sound when the button is pushed
playSound.addEventListener('click', (event) => {
  document.querySelector('.hidden').play();
  if (currHorn=="party-horn"){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
});


