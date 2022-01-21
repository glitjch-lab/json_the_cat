const { fetchBreedDescription } = require(`./breedFetcher`);

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    return console.log(`error: fetch request issue - ${error}`);
  } else {
    console.log(description);
  }

});

