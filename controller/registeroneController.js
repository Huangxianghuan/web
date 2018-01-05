angular.module('app')
	.controller('registeroneController',['$scope','$state',function($scope,$state){
		$scope.nex = function(){
			$state.go('register.registertwo')
		}
	}])