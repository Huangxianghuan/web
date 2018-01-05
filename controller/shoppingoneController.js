angular.module('app')
	.controller('shoppingoneController',['$scope',function($scope){
		$scope.back = function(){
			history.go(-1)
		}
	}])
	