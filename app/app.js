define([
	'angular',
	'angularRoute',
	'angularFire',
	'controllers/detailCtrl',
	'controllers/formCtrl',
	'controllers/songsCtrl'
], function(angular, angularRoute, angularFire, detailCtrl, formCtrl, songsCtrl) {
	return angular.module("SongApp", [
		'ngRoute',
		'firebase',
		'SongApp.SongDetailCtrl',
		'SongApp.SongFormCtrl',
		'SongApp.SongListCtrl'
	]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		otherwise({
			redirectTo: '/'
		});

	}]);
});