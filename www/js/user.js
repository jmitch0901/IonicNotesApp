angular.module('mynotes.user',[])
.factory('User',function($http){

  var host = 'http://localhost:8200';
  var loggedIn = false;

/* note
  WE CAN USE LOCATION STORAGE TO PERSIST THE TOKEN!
*/
  return {

    login: function(creds){
      return $http.post(host + '/authenticate',creds)
        .then(function(res){
          var token = res.data.token;
          $http.defaults.headers.common.Authorization = 'Bearer '+token;
          loggedIn = true;
        });
    },
    isLoggedIn: function(){
      return loggedIn;
    }
  };
});
