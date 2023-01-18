const userRequests =
  [
    {
      "operationName": "login",
      "query": `mutation login($input: LoginInput!) {
                    login(input: $input) { 
                        accessToken
                    }
                }`,
          "variables": { "input": { "email": "", "password": "" } }
    },
    {
        "operationName": "createBare",
        "query": `mutation createBare($createUserInput: CreateUserInput!){
                    createBare(createUserInput: $createUserInput) {
                        status,
                        reason
                    }
                }`,
        "variables": { "createUserInput": { "email": "", "firstName": "", "lastName": ""} }
    },
    {
        "operationName": "activateUser",
        "query": `mutation activateUser($input: ActivateUserInput!){
                    activateUser(input: $input) {
                        status,
                        reason
                    }
                }`,
        "variables": { "input": { "activationKey": ""} }
    },
    {
        "operationName": "requestResetPassword",
        "query": `mutation requestResetPassword($input: RequestPasswordInput!){
                    requestResetPassword(input: $input) {
                        status,
                        reason
                    }
                }`,
        "variables": { "input": { "emai": ""} }
    },
    {
    "operationName": "resetPassword",
    "query": `mutation resetPassword($input: ResetPasswordInput!) {
                resetPassword(input: $input) {  
                    status
                    reason
                }
              }`,
    "variables": { "input": { "newPassword": "", "resetToken": "" } }
    },
    {
    "operationName": "me",
    "query": `query me {
                me {  
                    id
                    firstName
                    lastName
                    isMember
                    email
                }
              }`,
    "variables": {}
    },
  ]
