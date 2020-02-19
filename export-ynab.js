const https = require('https');

var YNAB = 'https://api.youneedabudget.com/v1/budgets/default/accounts';

// Get auth token
var token; 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log('YNAB API requires an auth token. Please follow the documentation here: https://api.youneedabudget.com/');
  readline.question('Please enter your token', token => {
    console.log(`Auth Token:  ${token}`);
    readline.close();
  });

// Get data
https.get(YNAB (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});