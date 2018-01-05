angular.module('app')
	.controller('registerController',['$scope',function($scope){
		$scope.gopage = function(){
			history.go(-1)
		}
	}])