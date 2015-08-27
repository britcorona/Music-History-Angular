var app = angular.module("SongApp", ['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/song-list.html',
				controller: 'SongCtrl'
			}).
			when('/songs/:songId', {
				templateUrl: 'partials/song-detail.html',
				controller: 'SongDetailCtrl'
			}).
			// when('/songs/new', {
			// 	templateUrl: 'partials/song-form.html',
			// 	controller: 'SongFormCtrl'
			//}).
			otherwise({
				redirectTo: '/'
			});
}]);