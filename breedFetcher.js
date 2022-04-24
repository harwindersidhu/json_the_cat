const request = require('request');
const args = process.argv;
const query = args[2];

let url = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;
request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log(typeof body);
  const data = JSON.parse(body);
  console.log(typeof data);

  //Breed not found
  if (data.length === 0) {
    console.log("Breed not found");
  }

  //Just display description of the response
  for (let cat of data) {
    let description = cat.description;
    console.log(description);
  }
});