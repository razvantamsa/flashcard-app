const axios = require("axios");

const endpoint = "localhost:3000/graphql";
const headers = {
	"content-type": "application/json",
    "Authorization": "<token>" // pentru requesturile care se fac dupa login
};
const graphqlQuery = {
    "operationName": "fetchAuthor",
    "query": `query fetchAuthor { author { id name } }`,
    "variables": {}
};

const response = axios({
  url: endpoint,
  method: 'post',
  headers: headers,
  data: graphqlQuery
});

console.log(response.data); // data
console.log(response.errors); // errors if any