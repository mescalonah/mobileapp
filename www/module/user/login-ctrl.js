angular.module('starter.controllers.login', [])



.controller('LoginCtrl', function($scope,$state) {
	
	
	$scope.user = { username : 'profilejohn1469458220817@test.com', password : 'letmein01*'};

	firebase.auth().signOut();
	
	$scope.signIn = function (user) {
		
		//alert('signing in')
		
		    firebase.auth().signInWithEmailAndPassword($scope.user.username, $scope.user.password)
		    .then(function (result) {
		    	
				
		    	$state.go("tab.dash")
		    	
		    });
		
		
		
	}
	
	$scope.signOut = function () {
		
		firebase.auth().signOut();
		
	}
	
})

.controller('SignoutCtrl', function($scope,$state) {
		firebase.auth().signOut();
		$state.go("login")
	
});