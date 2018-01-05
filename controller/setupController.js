angular.module('app')
	.controller('setupController',['$scope',function($scope){


		$scope.data = [
			{img: './images/icons/setup01.png', text: '个人资料', url:'data'},
			{img: './images/icons/setup02.png', text: '账户与安全', url:'account'},
			{img: './images/icons/setup03.png', text: '隐私设置', url:'privacy'},
			{img: './images/icons/setup04.png', text: '新消息通知', url:'new'},
			{img: './images/icons/setup05.png', text: '客服小蓝', url:''},
			{img: './images/icons/setup06.png', text: '关于大地蓝', url:''}
		]

		
		$scope.backd = function(){
			history.go(-1);
		}
	}])