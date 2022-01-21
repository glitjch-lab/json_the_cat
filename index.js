const { fetchBreedDescription } = require(`./breedFetcher`);

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    return console.log(`Cat search failed. The cat does not exist`);
  } else {
    console.log(description);
  }

});

