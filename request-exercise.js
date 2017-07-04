// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')

      .on('error', function (err) {
         throw err;
         console.log("Error, eror, error!");
       })

      .on('response', function (response) {
         console.log('Response Status Code:\n',response.statusCode, response.headers['content-type']);
       })

      .pipe(fs.createWriteStream('./future.jpg'));
      console.log("Download complete...")

