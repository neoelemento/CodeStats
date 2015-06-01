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



//(function($) {
//	var Code = {
//		url: "http://codeivate.com/users/neoelemento.json",
//		init: function() {
//			this.getData();
//		},
//		getData: function() {
//			$.ajax({
//			     url:this.url,
//			     dataType: 'jsonp',
//			     success:function(json) {
//			        $("#details").append('<ul><li>Username: ' + json.name + '</li><li>Days Coded: ' + json.total_days_coded + '</li><li>Longest streak: ' + parseInt((json.max_streak)/60) + ' mins</li><li>Number of known languages: ' + Object.keys(json.languages).length + '</li></ul>');
//			     },
//			     error:function() {
//			         return "Error reading data";
//			     }      
//			});
//		},
//		putData: function () {
//			//$('#username').append((this.getData()).username);
//		}
//	};
//	
//	Code.init();
//})(jQuery);