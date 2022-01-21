const request = require(`request`);

const fetchBreedDescription = function (breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const [ breedData ] = JSON.parse(body);

    if (breedData) {
      callback(null, breedData.description)
    } else {
    
      callback(null, `${breed} is not found.`)
    }

  });

};


module.exports = { fetchBreedDescription };