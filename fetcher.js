let myArgs = process.argv.slice(2);

const request = require('request');
// console.log(myArgs);

const fs = require('fs');

request(myArgs[0], (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(myArgs[1], body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${myArgs[1]}`);
    }
  });
});