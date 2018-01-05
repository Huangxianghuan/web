
angular.module('app')
	.controller('accountController',['$scope',function($scope){
		
		$scope.backc = function(){
			history.go(-1);
		}
	}])