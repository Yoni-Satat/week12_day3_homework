const app = function () {
  const url = 'https://api.punkapi.com/v2/beers';

  makeRequest(url, requestComplete);
  // create makeRequest()
  // create requestComplete aka the callback
  // create a function to display html (beerInfo())


}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}

const requestComplete = function() {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  beerInfo(beers);
}

const beerInfo = function(beers) {
  const ul = document.querySelector('#beer-list');
  beers.forEach(function(beer) {
    const beerUl = document.createElement('ul');
    const name = document.createElement('li');
    const imgLi = document.createElement('li');
    name.innerText = beer.name;
    const image = document.createElement('img');
    image.classList.add('beer-image');
    image.src = beer.image_url;
    imgLi.appendChild(image);
    beerUl.appendChild(name);
    beerUl.appendChild(imgLi);
    ul.appendChild(beerUl);
  });
}

document.addEventListener('DOMContentLoaded', app);
