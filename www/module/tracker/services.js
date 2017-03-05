angular.module('tracker.services', [])
.factory('TrackerService', function($q,$http) {
	
	    var trackedItems = [];
		var stands=[];

	  return {
        
	    all: function() {
	      return trackedItems;
	    },
	    
	    add: function(trackedItem) {
	    	trackedItems.push(trackedItem)
		},           

      remove: function(trackedItem){
		  console.log($scope.trackedItems);
			$scope.trackedItems.splice($scope.trackedItems.indexOf(trackedItem, 1));
			console.log($scope.trackedItems);	
			console.log($firebaseArray(ref));
      },

        getstands: function()
        {
        $http.get('https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=8edaae17725384164729220c7163cd870aa553f9').success(function(data)
        {
             angular.forEach(data, function(data)
              {
                stands.push(data);
               
                });
                       })
        .error( function () {

              alert('There was an error');
              console.log(stands);
        });
        return stands;
        
        }
				   
		}
}
)