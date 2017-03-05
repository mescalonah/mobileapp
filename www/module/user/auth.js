var app = angular.module("starter.services.auth", ["firebase"]);

// let's create a re-usable factory that generates the $firebaseAuth instance
app.factory("Auth", 
  function($firebaseAuth) {
    //var ref = new Firebase(FIREBASE_API.url);
    return $firebaseAuth();
  }
);