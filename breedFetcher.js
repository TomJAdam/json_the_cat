//Json the cat
// command line app for fetching cat data using theCatApi

const request = require('request');


//searches theCatApi for a breed and returns the description
const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description.trim());
    } else {
      callback('Please enter valid cat breed.');
    }
  });
};

module.exports = fetchBreedDescription;