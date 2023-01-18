const cardRequests =
  [
    {
      "operationName": "createCard",
      "query": `mutation createCard($createCardInput: CreateCardInput!) {
                  createCard(createCardInput: $createCardInput) { 
                    front
                    back
                    score
                    timesPracticed
                    level
                    lastPracticedAt
                    dueDate
                  }
                }`,
    "variables": { front: "", back: "", deckId: "" }
    },
    {
      "operationName": "editCard",
      "query": `mutation editCard($editCardInput: EditCardInput!, $cardId: String!) {
                  editCard(editCardInput: $editCardInput, cardId: $cardId) { 
                    front
                    back
                    score
                    timesPracticed
                    level
                    lastPracticedAt
                    dueDate
                  }
                }`,
      "variables": { editCardInput: { front: "", back: "", score: 0, timesPracticed: 0, level: 0 }, cardId:""} // besides cardId, all other fields are optional
    },
    {
      "operationName": "deleteCard",
      "query": `mutation deleteCard($id: String!) {
                  deleteCard(id: $id) { 
                    status
                    reason 
                  }
                }`,
      "variables": { id:""} 
    },
    {
    "operationName": "getByCardId",
    "query": `query getByCardId($id: String!) {
                getById(id: $id) {  
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
              }`,
    "variables": {id:""}
    },
    {
      "operationName": "listByDeckId",
      "query": `query listByDeckId($deckId: String!) {
                  listByDeckId(deckId: $deckId) {
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
                }`,
      "variables": { deckId: "" }
    }
  ]
