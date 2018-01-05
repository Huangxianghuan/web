angular.module('app')
	.controller('productController',['$scope','$state',function($scope,$state){
		$scope.one = function(){
			$state.go('assess')
		}
	}])