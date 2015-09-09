define([
	'angular',
	'angularRoute',
	'firebase',
	'controllers/detailCtrl',
	'controllers/formCtrl',
	'controllers/songsCtrl'
], function(angular, angularRoute, firebase, detailCtrl, formCtrl, songsCtrl) {

//Make sure to list firebase to make firebase work with the information in songsCtrl.js
//var app = angular.module("SongApp", ['ngRoute', 'firebase']);
		
	return angular.module("SongApp", [
		'ngRoute',
		'SongApp.SongDetailCtrl',
		'SongApp.SongListCtrl',
		'SongApp.SongFormCtrl'
	]).

//app.config(['$routeProvider',
config(['$routeProvider',
function($routeProvider) {
	$routeProvider.
		// when('/', {
		// 	templateUrl: 'partials/song-list.html',
		// 	controller: 'SongCtrl'
		// }).
		// when('/songs/:songId', {
		// 	templateUrl: 'partials/song-detail.html',
		// 	controller: 'SongDetailCtrl',
		// 	controllerAs: 'detail'
		// }).
		// when('/songs/new', {
		// 	templateUrl: 'partials/song-form.html',
		// 	controller: 'SongFormCtrl'
		//}).
		otherwise({
			redirectTo: '/'
		});

	}]);
});