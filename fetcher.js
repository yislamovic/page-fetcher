const fs = require('fs')
const request = require('request');
const args = process.argv;
args.splice(0,2);

const url = args[0];
const localPath = args[1];

request(url, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err)
      return err;
    }
    else{
      let bytes = 0;
      for(let char of body){
        if(char){
          bytes++;
        }
      }
      console.log(`Downloaded and saved ${bytes} bytes to ${localPath}`);
    }
  })
});



