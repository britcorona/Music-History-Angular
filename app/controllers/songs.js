app.controller("SongCtrl", function($scope, $q) {

	//This is on the Add Song Page
	$scope.newSong = {
		name: "",
		artist: "",
		album: ""
	};

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

	//Search Button
	// $scope.setfilter = function() {
	//   $scope.search = {};
	//   $scope.search[ $scope.key ] = $scope.filter;
	//   console.log( $scope.search );
	// };
	


	//Displays the first JSON file on main page
	function getSongList(name) {
		return $q(function(resolve, reject) {
			$.ajax({
				url: "./data/first-songs.json"
			}).done(function(response) {
				resolve(response.songs);
			}).fail(function(xhr, status, error) {
				reject(error);
			});
		});
	}

	getSongList()
		.then(function(songs){
			$scope.songs = songs;
		},function(error) {
			console.log("error", error);
	});

	//Displays the second JSON file on main page
	function getSecondSongList(name) {
		return $q(function(resolve, reject) {
			$.ajax({
				url: "./data/second-songs.json"
			}).done(function(response) {
				resolve(response.songs);
			}).fail(function(xhr, status, error) {
				reject(error);
			});
		});
	}

	getSecondSongList()
		.then(function(songs){
			for ( var i = 0; i < songs.length; i ++) {
				$scope.songs.push(songs[i]);
			}
		},function(error) {
			console.log("error", error);
	});


});