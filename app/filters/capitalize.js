define([
	'angular'
], function(angular) {
//app.controller("SongCtrl", 

//This capitalizes the first letter
angular.module('capitalize', function() {
	return function(input, scope) {
		if (input !== null) {
			return input.substring(0,1).toUpperCase()+input.substring(1);
		}
	};
});
});

//This sorts words in order
// app.filter('sort', function() {
// 	return function(input, scope) {
// 		if (input !== null) {
// 			return input.split("").sort().join("");
// 		}
// 	}
// });