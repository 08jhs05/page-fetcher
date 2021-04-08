const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

const getFile = async () => {request(url, (error, response, body) => {
  if(error){
    console.log('error - url is invalid or the page is not responding.')
    throw error;}
  if(response.statusCode === 200){
    fs.writeFile(filePath, body, function(err){
      if(err) throw err;
      });
    }
  });
}

getFile().then(()=>{
    console.log(`Downloaded and saved ${fs.statSync(filePath).size} bytes to ${filePath}`);
  });