const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    if (err) {
      callback(err, null);
    } else {
      if (body === '[]') {
        callback("no breed found", null);
        return;
      } else {
        const data = JSON.parse(body);
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };