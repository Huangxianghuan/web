angular.module('app')
	.controller('privacyController',['$scope',function($scope){
		$scope.backb = function(){
			history.go(-1);
		}
	}])