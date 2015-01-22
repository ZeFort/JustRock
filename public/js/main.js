var app = angular.module("app", ['ngRoute'])
		.config(function($routeProvider){
			$routeProvider
				.when('/',{
					templateUrl:'../template/index.html'
				})
				.when('/listen',{
					templateUrl: '../template/listen.html'
				})
				.when('/addSong',{
					templateUrl: '../template/addsong.html'
				})
		})


app.controller("createController",function($scope, $http){
	data = {
		name: "Danik"
	}
	$http.post('/addSong/l', data).success(function(response) {
  });
	$scope.name = "blabla";
});