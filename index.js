var data = [];
var currentIndex = -1;

// Fetch data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    getNewData();
  });

// Get a new data
function getNewData() {
  var index = currentIndex;
  while (index === currentIndex) {
    index = Math.floor(Math.random() * data.length);
  }
  currentIndex = index;
  document.getElementById('image').src = data[index].image;
  document.getElementById('title').innerHTML = data[index].title;
  document.getElementById('description').innerHTML = data[index].description;
}

// Save the current index in local storage
chrome.storage.local.set({'currentIndex': currentIndex});

// Load the last index from local storage
chrome.storage.local.get(['currentIndex'], function(result) {
  currentIndex = result.currentIndex;
});

// Get a new data every day
setInterval(getNewData, 86400000);
