'use strict';

// ********** GLOBAL VARIABLES **********
let prodArray = [];
let votingRounds = 25;

// ********** DOM WINDOWS **********
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

// ********** CONSTRUCTOR FUNCTIONS **********
function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.votes = 0;
  this.views = 0;
}

// ********** EVENT HANDLERS **********

// ********** HELPER FUNCTIONS/UTILITIES **********
function renderImg() {
  // TODO: 3 images per page
  let imgOneIndex = getRandomIndex(prodArray);
  let imgTwoIndex = getRandomIndex(prodArray);
  let imgThreeIndex = getRandomIndex(prodArray);

  // TODO: Make sure that the images are not the same
  while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {
    imgTwoIndex = getRandomIndex(prodArray);
  }

  imgOne.src = prodArray[0].image;
  imgOne.alt = `this is an image of ${prodArray[imgOneIndex].name}`;
  imgOne.title = prodArray[imgOneIndex].image;
  imgTwo.src = prodArray[1].image;
  imgTwo.alt = `this is an image of ${prodArray[imgTwoIndex].name}`;
  imgTwo.title = prodArray[imgTwoIndex].image;
  imgThree.src = prodArray[2].image;
  imgThree.alt = `this is an image of ${prodArray[imgThreeIndex].name}`;
  imgThree.title = prodArray[imgThreeIndex].image;
}

// TODO: Increase the number of views
prodArray[imgOneIndex].views++;
prodArray[imgTwoIndex].views++;
prodArray[imgThreeIndex].views++;

function getRandomIndex() {
  return Math.floor(Math.random() * prodArray.length);
}

handleImageClick(event) {
  // TODO: Identify which image was clicked
  let imgClicked = event.target.title;
  console.log(imgClicked);

  // TODO: Increase the number of clicks on the image
  for (let i = 0; i < prodArray.length; i++) {
    if (imgClicked === prodArray[i].name){
      prodArray[i].votes++;
    }
  }

  // TODO: Decrease the number of voting rounds
  votingRounds--;

  // TODO: Rerender the images
  renderImg();

  // TODO: Once voting is complete, stop the click event from bubbling up


// ********** EXECUTABLE CODE **********
let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'img/sweep.png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');

prodArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

renderImg();

imgContainer.addEventListener('click', handleImageClick);