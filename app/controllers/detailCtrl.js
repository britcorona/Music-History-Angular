app.controller("SongDetailCtrl", 
  ["$scope",
  "$routeParams",
   "song-storage",
   "$q", 
  function($scope, $routeParams, song_storage, $q) {

	$scope.id = $routeParams.songId;

	//console.log("simple_storage.getJunk(\"garbage\")", simple_storage.getJunk("garbage"));

	song_storage.then(
    function(promiseResolutionData) {

      $scope.songs = promiseResolutionData;
    },
    function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
    });
  
}]);