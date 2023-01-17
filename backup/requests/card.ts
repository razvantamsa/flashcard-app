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

const examples =
  [
    {
    "operationName": "getById",
    "query": `query getById($id: String!) {
                      getById(id: $id) {  
                        card {
                          id
                          deckId
                          createdAt
                          updatedAt
                          front
                          back
                          score
                          timesPracticed
                          level
                          lastPracticedAt
                          dueDate
                          accuracy
                        }
                      }
                    }`,
    "variables": {id:""}
    },
    {
      "operationName": "listByDeckId",
      "query": `query listByDeckId($deckId: String!) {
                      listByDeckId(deckId: $deckId) {
                        cards {
                          id
                          deckId
                          createdAt
                          updatedAt
                          front
                          back
                          score
                          timesPracticed
                          level
                          lastPracticedAt
                          dueDate
                          accuracy
                        }
                      }
                    }`,
      "variables": { deckId: "" }
    },
    {
      "operationName": "create",
      "query": `mutation create($input: CreateCardInput!) {
                      create(input: $input) {
                        card {
                          id
                          deckId
                          front
                          back
                        }
                      }
                    }`,
      "variables": {
        "input": {
          "deckId": "",
          "front": "",
          "back": ""
        }
      }
    },
  ]
