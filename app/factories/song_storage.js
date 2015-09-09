define([
	'angular'
], function(angular) {
angular.modul("song-storage", function($q, $http) {
	function getSongList() {
		return $q(function(resolve, reject) {
			$http.get('./data/first-songs.json')
			.success(
				function(objectFromJSONFile) {
				resolve(objectFromJSONFile.songs);
			},function(error) {
				reject(error);
			});
    });
  }
  return getSongList();
});
});