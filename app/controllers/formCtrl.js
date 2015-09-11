define([
  'angular',
  'firebase',
  'angularRoute'
], function(angular, firebase, angularRoute) {
    angular.module("SongApp.SongFormCtrl", ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/songs/:songId', {
      templateUrl: 'partials/song-detail.html',
      controller: 'formCtrl',
      controllerAs: 'SongFormCtrl'
    });
  }])
    .controller('formCtrl', ["$firebaseArray", "$scope", function($firebaseArray, $scope) {

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