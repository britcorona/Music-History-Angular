app.controller("SongCtrl", 
  ["$scope",
   "$q",
   "song-storage", 
  function($scope, $q, song_storage) {


	//This is on the Add Song Page
	$scope.newSong = {
		name: "",
		artist: "",
		album: ""
	};

	//simple_storage.addJunk("garbage", { a: 1, b:2 });

	//Add Song Page
	$scope.addSong = function() {
		$scope.songs.push({
			name: $scope.newSong.name,
			artist: $scope.newSong.artist, 
			album: $scope.newSong.album});
	};

	//Delete Button
	$scope.killSong = function(song) {
	  var songIndex = $scope.songs.indexOf(song);
		  if (songIndex >= 0) {
		    $scope.songs.splice(songIndex, 1);
		  }
	};


	song_storage.then(
    function(promiseResolutionData) {
      //console.log("promiseResolutionData", promiseResolutionData);
      $scope.songs = promiseResolutionData;
    },
    function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
    });

  
}]);