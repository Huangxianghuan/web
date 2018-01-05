angular.module('app')
	.controller('dataController',['$scope',function($scope){
		$scope.back = function(){
			history.go(-1);
		}
	}]);