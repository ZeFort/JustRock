var app = angular.module("app", ['ngRoute']).config(function($routeProvider){
			$routeProvider
				.when('/',{
					templateUrl:'../template/index.html'
				})
				.when('/listen',{
					templateUrl: '../template/listen.html',
					controller: 'ToggleController'
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

app.controller('ToggleController', function($scope){
	var open = false;
	var openSearch = false;
	$('.container_song').perfectScrollbar();

	$scope.searchPanel = function(){
		if (!openSearch){
			$(".search_panel").css({
				"visibility": "visible"
			});
			openSearch = true;
		}else{
			$(".search_panel").css({
				"visibility": "hidden"
			});
			openSearch = false;
		}
	};

	$scope.togglePanel = function() {
		if (open){
			$(".track_list").animate({right: '-=370'});
			$(".glyphicon-chevron-right").addClass("glyphicon-chevron-left");
			$(".glyphicon-chevron-right").removeClass("glyphicon-chevron-right");
			$(".glyphicon-search").css({
				"visibility": "hidden"
			});
			$(".glyphicon-arrow-left").css({
				"visibility": "hidden"
			});
			open = false;
		}else{
			$(".track_list").animate({right:'+=370'});
			$(".glyphicon-chevron-left").addClass("glyphicon-chevron-right");
			$(".glyphicon-chevron-left").removeClass("glyphicon-chevron-left");
			$(".glyphicon-search").css({
				"visibility": "visible"
			});
			$(".glyphicon-arrow-left").css({
				"visibility": "visible"
			});
			open = true;
		}
	};
})

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