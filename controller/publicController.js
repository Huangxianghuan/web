angular.module('app')
	.controller('publicController',['$scope',function($scope){
		$scope.data = [
			{one: 'ion-ios-home', two: 'ion-ios-home-outline', three: '首页', url: 'public.home'},
			{one: 'ion-ios-keypad', two: 'ion-ios-keypad-outline', three: '分类', url:'public.class'},
			{one: 'ion-ios-cart', two: 'ion-ios-cart-outline', three: '购物车', url: 'shopping'},
			{one: 'ion-ios-person', two: 'ion-ios-person-outline', three: '我的', url: 'mine'}
		]

	}])