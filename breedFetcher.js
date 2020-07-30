const request = require('request');
let args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (err, res, body) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    if (body === '[]') {
      console.log("Error: no breed found");
      return;
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  }
});