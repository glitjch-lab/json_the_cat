const request = require(`request`);

const URL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breed, callback) {
  // console.log('hi');

  request(`${URL}${breed}`, (error, response, body) => {
    if (error) {
      console.log(error);
      return callback(error, null);
    }

    const readableInfo = JSON.parse(body);

    const description = readableInfo[0].description;
    if (description) {
      console.log(`meow we got the breed informewtion. *lick* Here it is. \n\n ${breed.description} \n`);
      callback(null, description)
    } else {
      console.log(`Failed to find breed. Does not exist`);
    }

  });

};


module.exports = { fetchBreedDescription };