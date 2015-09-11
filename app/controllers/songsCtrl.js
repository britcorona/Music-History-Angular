define([
	'angular',
	'firebase',
	'angularRoute'
], function(angular, firebase, angularRoute) {
	angular.module("SongApp.SongListCtrl", ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			.when('/', {
				templateUrl: 'partials/song-list.html',
				controller: 'songsCtrl',
				controllerAs: 'SongListCtrl'
			});
		}])
		.controller("songsCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

		  //This will connect to firebase and get the info
			  var ref = new Firebase("https://torrid-heat-9915.firebaseio.com/songs");

			 //  // download the data into a local object
			  $scope.songs = $firebaseArray(ref);

				// //Delete Button
				$scope.killSong = function(song) {
				  var songIndex = $scope.songs.indexOf(song);
					  if (songIndex >= 0) {
					    $scope.songs.splice(songIndex, 1);
					  }
					$scope.$remove();
				};

	}]);
});