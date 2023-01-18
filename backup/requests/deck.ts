const deckRequests =
  [
    {
      "operationName": "createDeck",
      "query": `mutation createDeck($createDeckInput: CreateDeckInput!) {
                  createDeck(createDeckInput: $createDeckInput) { 
                    id
		            name
                    createdAt
                    updatedAt
                  }
                }`,
    "variables": { name:"" }
    },
    {
      "operationName": "editDeck",
      "query": `mutation editDeck($deckId: String!, $editDeckInput: EditDeckInput!) {
                  editDeck(deckId: $deckId, editDeckInput: $editDeckInput) { 
                    id
		            name
                    createdAt
                    updatedAt
                  }
                }`,
      "variables": { editDeckInput: {name: "" }, deckId: ""}
    },
    {
      "operationName": "deleteDeck",
      "query": `mutation deleteDeck($id: String!) {
                  deleteDeck(id: $id) { 
                    status
                    reason 
                  }
                }`,
      "variables": { id:""} 
    },
    {
        "operationName": "deleteDeckByUserId",
        "query": `mutation deleteDeckByUserId {
                    deleteDeckByUserId { 
                      status
                      reason 
                    }
                  }`,
        "variables": {} 
    },
    {
    "operationName": "listByUserId",
    "query": `query listByUserId {
                listByUserId {  
                  name
                  deckAccuracy
                  deckCount
                  createdAt
                }
              }`,
    "variables": {}
    },
    {
      "operationName": "getDeckById",
      "query": `query getDeckById($id: String!) {
                    getDeckById(id: $id) {
                      name
                      deckAccuracy
                      deckCount
                      createdAt
                    }
                }`,
      "variables": { deckId: "" }
    }
  ]
