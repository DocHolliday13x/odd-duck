'use strict';
console.log('hello world');

// ********** GLOBAL VARIABLES **********

let prodArray = [];
let votingRounds = 25;

// ********** DOM WINDOWS **********

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-container');

// ********** CONSTRUCTOR FUNCTIONS **********
function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
}

// ********** HELPER FUNCTIONS/UTILITIES **********

function renderImg() {
  // TODO: 3 images per page
  let imgOneIndex = getRandomIndex();
  let imgTwoIndex = getRandomIndex();
  let imgThreeIndex = getRandomIndex();

  // TODO: Make sure that the images are not the same
  while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {
    imgTwoIndex = getRandomIndex();
    imgThreeIndex = getRandomIndex();
  }
  // mapping
  imgOne.src = prodArray[imgOneIndex].image;
  imgOne.title = prodArray[imgOneIndex].name;
  imgOne.alt = `this is an image of ${prodArray[imgOneIndex].name}`;
  imgTwo.src = prodArray[imgTwoIndex].image;
  imgTwo.title = prodArray[imgTwoIndex].name;
  imgTwo.alt = `this is an image of ${prodArray[imgTwoIndex].name}`;
  imgThree.src = prodArray[imgThreeIndex].image;
  imgThree.title = prodArray[imgThreeIndex].name;
  imgThree.alt = `this is an image of ${prodArray[imgThreeIndex].name}`;

  // TODO: Increase the number of views
  prodArray[imgOneIndex].views++;
  prodArray[imgTwoIndex].views++;
  prodArray[imgThreeIndex].views++;
}

function getRandomIndex() {
  return Math.floor(Math.random() * prodArray.length);
}

function handleImageClick(event){
  // TODO: Identify which image was clicked
  let imgClicked = event.target.title;
  console.dir(imgClicked);

  // TODO: Increase the number of clicks on the image
  for (let i = 0; i < prodArray.length; i++) {
    if (imgClicked === prodArray[i].name) {
      prodArray[i].votes++;
    }
    console.log(prodArray[i].votes);
    console.log(prodArray[i].name);
    console.log(prodArray[i].image);
    console.log(imgClicked);
  }

  // TODO: Decrease the number of voting rounds
  votingRounds--;

  // TODO: Rerender the images
  renderImg();

  // TODO: Once voting is complete, stop the click event from bubbling up
  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleImageClick);
    //document.getElementById('show-results-btn').style = 'visibility: visible';
  }
}

function handleShowResults(){
  if (votingRounds === 0){
    for (let i = 0; i < prodArray.length; i++){
      let prodListItem = document.createElement('li');
      prodListItem.textContent = `${prodArray[i].name}: Views: ${prodArray[i].views} & Votes: ${prodArray[i].votes}`;
      resultsList.appendChild(prodListItem);
    }
    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

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
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');

prodArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

renderImg();

imgContainer.addEventListener('click', handleImageClick);
resultsBtn.addEventListener('click', handleShowResults);
