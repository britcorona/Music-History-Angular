define([
  'angular',
  'angularRoute',
  'firebase'
], function(angular) {
    angular.module("SongApp.SongDetailCtrl", ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/songs/:songId', {
      templateUrl: 'partials/song-detail.html',
      controller: 'SongDetailC'
    });
  }])
    .controller('SongDetailCtrl', [function() {

	$scope.id = $routeParams.songId;

  	song_storage.then(
      function(promiseResolutionData) {
        $scope.songs = promiseResolutionData;
      },
      function(promiseRejectionError) {
        console.log("error", promiseRejectionError);
      });
    
    }]);
});