define([
	'angular'
], function(angular) {
//Since this is a controller must list the ref for firebase everytime
angular.module("SongApp.SongFormCtrl", 
  ["$scope",
   "$firebaseArray",
  function($scope, $firebaseArray) {

  	//This will connect to firebase and get the info
	  var ref = new Firebase("https://torrid-heat-9915.firebaseio.com/songs");
	  // download the data into a local object
	  $scope.songs = $firebaseArray(ref);

	  //Add Song
		$scope.addSong = function() {
			$scope.songs.$add({
				name: $scope.newSong.name,
				artist: $scope.newSong.artist, 
				album: $scope.newSong.album
				//id: $scope.newSong.id
			});
			//This will clear the boxes in the form once the add button is clicked.
			$scope.newSong = {"":""};
		};
	}]);
});