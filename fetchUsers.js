const ApiClient = require('./api/src/ApiClient.js'); 
const UsersApi = require('./api/src/api/UsersApi.js'); 
const config = require('./config/config.js')

const apiClient = new ApiClient();

apiClient.authentications.ApiTokenAuth.apiKey = config.apiKey;
const usersApi = new UsersApi(apiClient);

const opts = {
  limit: 1, 
  sort: 'createdAt', 
  order: 'desc', 
};

usersApi.webApiUsersGet(opts, function(error, data, response) {
  if (error) {
    console.error('Error when calling UsersApi->webApiUsersGet: ', error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
});



