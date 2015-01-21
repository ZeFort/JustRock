var app = angular.module("app", ['ngRoute'])
		.config(function($routeProvider){
			$routeProvider
				.when('/',{
					templateUrl:'../template/index.html'
				})
				.when('/listen',{
					templateUrl: '../template/listen.html'
				})
		})