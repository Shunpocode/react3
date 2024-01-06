export let API_TOKEN = fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
.then(function(response) { return response.json(); })
.then(function(data) { return API_TOKEN = data.token})
.catch(function(error) { 'proccess network errors' });;
