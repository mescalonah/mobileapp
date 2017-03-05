angular.module('profile.services', [])
.factory('ProfileService', function($q,$http) {
	
	    var trackedItems = [];

	  return {
        
	    all: function() {
	      return trackedItems;
	    },
	    
	    add: function(trackedItem) {
	    	trackedItems.push(trackedItem);
		  },

			remove: function(){
			$scope.trackedItems.length=0;
			},
			subs: function(trackedItem){
			$scope.trackedItems.splice(0, 1,trackedItem);
			}

		}
}
)