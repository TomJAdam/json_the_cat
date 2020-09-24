//Json the cat
// command line app for fetching cat data using theCatApi

const request = require('request');
//node line input
const input = process.argv.splice(2);

//searches theCatApi for a breed and returns the description
request(`https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    const data = JSON.parse(body);
    if (data[0] !== undefined) {
      console.log('description:', data[0].description);
    }
    if (Object.keys(data).length === 0) {
      console.log('Please enter valid cat breed.');
    }
  }
});

