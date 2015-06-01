var CodeApp = angular.module('CodeApp', [])
    .controller('CodeController', function($scope, $http) {	
		username = "neoelemento";
		$scope.url = "http://codeivate.com/users/" + username + ".json?callback=JSON_CALLBACK";
		$http.jsonp($scope.url).
		  success(function(data) {
		    $scope.data = data;
		  }).
		  error(function (data) {
		    $scope.data = "Request failed";
		  });
         $scope.data = $http.jsonp('');
    })
	
	.filter('dashspace', function() {
		return function(strg) {
			return strg.replace(/-/g, " ");
		};
	})
	
	.filter('titlecase',function() {
		return function(strg) {
			return strg.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		};
	});