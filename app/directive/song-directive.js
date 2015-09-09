define([
  'angular'
], function(angular) {
angular.module("musicHistorySongBrief", function() {
	return {
		restrict: "E",
		templateUrl: "partials/song-brief.html",
		scope: {
			message: '='
		},
		link: function(scope, elem, attrs) {
			console.log(scope.message);
		}
	};
});
});