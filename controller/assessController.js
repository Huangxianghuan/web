angular.module('app')
	.controller('assessController',['$scope',function($scope){
		$scope.tk = true;
		$scope.toggle = function(){
			$scope.tk = !$scope.tk;
		}

		$scope.gohome=function(){
			history.go(-1);
		}
	}])