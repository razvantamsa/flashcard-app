const settingsRequests =
  [
    {
      "operationName": "updateUserSettings",
      "query": `mutation updateUserSettings($input: UpdateSettingsInput!) {
                    updateUserSettings(input: $input) { 
                        language
                        darkTheme
                    }
                }`,
          "variables": { "input": { "darkTheme": true, "language": "en" } }
    },
    {
    "operationName": "getUserSettings",
    "query": `query getUserSettings {
                getUserSettings {  
                    darkTheme
                    language
                }
              }`,
    "variables": {}
    }
  ]
