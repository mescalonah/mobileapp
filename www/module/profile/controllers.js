angular.module('profile.controllers', [])

.controller('ProfCtrl', function($scope, $firebaseArray ) {	  
		  
	  var ref = firebase.database().ref().child("savedprofile");

	  $scope.trackedItems = $firebaseArray(ref);  
	  
	  console.log($scope.trackedItems);
	  
	  
})
.controller('AddDetailCtrl', function($scope,$state, $firebaseArray, ProfileService) {
	  $scope.trackerItem = {name : "", surname:"", hobbies:"", description:""};
	  var ref = firebase.database().ref().child("savedprofile");
	  $scope.trackedItems = $firebaseArray(ref); 
	  console.log(ref);
	  console.log($scope.trackedItems);
	  $scope.adduser = function (form) {
			if (form.$valid) {
				console.log(form);
				$scope.trackedItems.$remove(0);
				$scope.trackedItems.$add(angular.copy($scope.trackerItem));
						window.confirm("Data Saved");
				$state.go("tab.profileMain");
		
			}}
		}
	 
)