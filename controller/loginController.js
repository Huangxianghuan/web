angular.module('app')
	.controller('loginController',['$scope','$state',function($scope,$state){
		$scope.page = function(){
			$state.go('register.registerone')
		}
		$scope.home = function(){
			$state.go('public.home')
		}
	}])