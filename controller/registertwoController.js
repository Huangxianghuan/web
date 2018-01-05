angular.module('app')
	.controller('registertwoController',['$scope','$state',function($scope,$state){
		$scope.nex = function(){
			$state.go('register.registerthree')
		}
	}])