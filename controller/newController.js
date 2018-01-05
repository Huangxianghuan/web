angular.module('app')
	.controller('newController',['$scope',function($scope){
		$scope.backa = function(){
			history.go(-1);
		}
	}])