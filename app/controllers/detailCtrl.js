define([
  'angular',
  'firebase',
  'angularRoute'
], function(angular, firebase, angularRoute) {
    angular.module("SongApp.SongDetailCtrl", ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/songs/:songId', {
      templateUrl: 'partials/song-detail.html',
      controller: 'detailCtrl',
      controllerAs: 'SongDetailCtrl'
    });
  }])
    .controller('detailCtrl', [function() {

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