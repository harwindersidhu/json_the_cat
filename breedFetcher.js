const request = require('request');

//Fetch description of provided cat breed.
const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      //Breed not found
      if (data.length === 0) {
        callback(null, "Breed not found");
      }

      //Just display description of the response
      for (let cat of data) {
        let description = cat.description;
        callback(null, description);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};