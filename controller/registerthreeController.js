angular.module('app')
	.controller('registerthreeController',['$scope','$state',function($scope,$state){
		$scope.back = function(){
			$state.go('login')
		}
	}])