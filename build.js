//require.config({
	({
		baseUrl: "./app/",
	paths: {
		angular: "../lib/bower_components/angular/angular.min",
		angularRoute: "../lib/bower_components/angular-route/angular-route",
		angularFire: "../lib/bower_components/angularfire/dist/angularfire.min",
		firebase: "../lib/bower_components/firebase/firebase",
		jquery: "../lib/bower_components/jquery/dist/jquery.min",
		bootstrap: "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	},
  shim: {
		'angular' : {'exports' : 'angular'},
		'bootstrap': ['jquery'],
		'angularRoute': ['angular']
	},
	name: "app",
	out: "main-built.js"
})