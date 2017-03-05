
angular.module('starter', ['ionic', 
                           
                           'starter.controllers',
                           'starter.controllers.login',
                           'starter.services.auth',
                           'tracker.controllers',
                           'tracker.services',
                           
                           'profile.controllers',
                           'profile.services',
            
                           'ngMessages',
                           'ngCordova',
                           'ngMap',
                           'firebase'])

.run(function($ionicPlatform, $rootScope, $state) {
	
	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
	    if (error === "AUTH_REQUIRED") {
	    	console.log("login required")
	      $state.go("login");
	    }
	  });
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.photos', {
      url: '/photos',
      views: {
        'tab-photos': {
          templateUrl: 'module/camera/tab-camera.html',
          controller: 'FBCameraCtrl',
          resolve : { 
        	  currentAuth :  function (Auth) {
        		   return Auth.$requireSignIn();
        	  } // currentAuth
          } // resolve
        }
      }
    })
     .state('tab.addTrackedPhotoItemToFB', {
      url: '/addTrackedPhotoItemToFB',
      views: {
        'tab-photos': {
          templateUrl: 'module/camera/add-trackedItem.html',
          controller: 'AddTrackedPhotoItemToFBCtrl',
          resolve : { 
        	  currentAuth :  function (Auth) {
        		   return Auth.$requireSignIn();
        	  } // currentAuth
          } // resolve
        }
      }
    }) 
           .state('tab.fbPhotoItemDetail', {
      url: '/fbPhotoItemDetail/:fbItemId',
      views: {
        'tab-photos': {
          templateUrl: 'module/camera/item-detail.html',
          controller: 'fbPhotoItemDetailCtrl',
          resolve : { 
        	  currentAuth :  function (Auth) {
        		   return Auth.$requireSignIn();
        	  } // currentAuth
          } // resolve
        }
      }
    })
.state('login', {
              url: '/login',
              templateUrl: 'module/user/login.html',
              controller: 'LoginCtrl',
})
.state('tab.signout', {
              url: '/signout',
              views: {
                  'tab-signout': {
                    controller: 'SignoutCtrl',
                  }
                }
})
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl',
        resolve : { 
      	  currentAuth :  function (Auth) {
      		   return Auth.$requireSignIn();
      	  } // currentAuth
        } // resolve
      }
    }
  })
  .state('tab.tracker', {
      url: '/tracker',
      views: {
        'tab-tracker': {
          templateUrl: 'module/tracker/tab-tracker.html',
          controller: 'TrackerCtrl',
          resolve : { 
        	  currentAuth :  function (Auth) {
        		   return Auth.$requireSignIn();
        	  } // currentAuth
          } // resolve
        }
      }
    })
           .state('tab.detail', {
      url: '/tracker/:trackerId',
      views: {
        'tab-tracker': {
          templateUrl: 'module/tracker/detail.html',
          controller: 'DetailCtrl',
          resolve : { 
        	  currentAuth :  function (Auth) {
        		   return Auth.$requireSignIn();
        	  } // currentAuth
          } // resolve
        }
      }
    })
      .state('tab.addTrackedItem', {
      url: '/addTrackedItem',
      views: {
        'tab-tracker': {
          templateUrl: 'module/tracker/add-trackedItem.html',
          controller: 'AddTrackedItemCtrl',
          resolve : { 
        	  currentAuth :  function (Auth) {
        		   return Auth.$requireSignIn();
        	  } // currentAuth
          } // resolve
        }
      }
    })
      .state('tab.profileMain', {
      url: '/profile',
      views: {
        'tab-profileMain': {
          templateUrl: 'module/profile/tab-profileMain.html',
          controller: 'ProfCtrl',
          resolve : { 
        	  currentAuth :  function (Auth) {
        		   return Auth.$requireSignIn();
        	  } // currentAuth
          } // resolve
        }
      }
    })
         .state('tab.profile', {
      url: '/ProfileAdd',
      views: {
        'tab-profileMain': {
          templateUrl: 'module/profile/tab-profile.html',
          controller: 'AddDetailCtrl',
          resolve : { 
        	  currentAuth :  function (Auth) {
        		   return Auth.$requireSignIn();
        	  } // currentAuth
          } // resolve
        }
      }
    })

 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
