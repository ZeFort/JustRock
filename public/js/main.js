var app = angular.module("app", ['ngRoute']).config(function($routeProvider){
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
}).controller("createController",function($scope, $http){
	var data = {
		name: "Danik"
	};

	$http.post('/addSong/l', data).success(function(response) {
		alert(JSON.stringify(response));
  	});

	$scope.name = "blabla";
});