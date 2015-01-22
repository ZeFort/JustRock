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
})

app.controller("SongCreateController", function($scope, $http){
	$scope.sendData = function() {
		var data = {
			name:   $scope.name,
			album:  $scope.album,
			artist: $scope.artist,
			cover:  $scope.cover,
			song:   $scope.song
		};
		$http.post('/songs/create', data).success(function(response) {
			alert(JSON.stringify(response));
		});	
	};
	$scope.name = '';
	$scope.album = '';
	$scope.artist = '';
	$scope.cover = '';
	$scope.song = '';
});

app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);