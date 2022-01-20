const request = require(`request`);

const catQuery = process.argv[2];
const URL = "https://api.thecatapi.com/v1/breeds/search?q=";


request(`${URL}${catQuery}`, (error, response, body) => {
  if (error) {
    return console.log('MEOW ERROR: FAILED SEARCH MEOWW: ', error);
  }

  const readableInfo = JSON.parse(body);
  const breed = readableInfo[0];
  if (breed) {
    console.log(`meow we got the breed informewtion. *lick* Here it is. \n\n ${breed.description} \n`);
  } else {
    console.log(`Failed to find breed. Does not exist`);
  }

});