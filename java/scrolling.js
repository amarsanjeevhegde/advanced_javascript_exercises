// allows for randome css height and width
const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}

const gri = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const init = function(){
  let items = document.querySelectorAll('.gallery li');
  // adds +1 length on each link
  for (let i = 0; i < items.length; i++){
    items[i].style.minWidth = gra(30,60) + 'vw';
    // allows for random color to be inserted to the page
    items[i].style.background = randomColor({luminosity: 'light'});
  }
  cssScrollSnapPolyfill()
}
init();