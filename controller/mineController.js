angular.module('app')
	.controller('mineController',['$scope','$state',function($scope,$state){
		$scope.list=[
			{img:'./images/icons/daifukuan@2x.png', p:'待付款'},
			{img: './images/icons/daifahuo@2x.png', p: '待发货'},
			{img: './images/icons/daishouhuo@2x.png', p: '待收货'},
			{img: './images/icons/daipingjia@2x.png', p: '待评价'}
		]

		$scope.listTwo=[
			{img: './images/icons/left01', text: '收藏宝贝', z: './images/icons/gengduo@2x.png'},
			{img: './images/icons/left02', text: '我的足迹', z: './images/icons/gengduo@2x.png'},
			{img: './images/icons/left03', text: '我的关注', z: './images/icons/gengduo@2x.png'},
			{img: './images/icons/left04', text: '退款/售后', z: './images/icons/gengduo@2x.png'},
			{img: './images/icons/left05', text: '我的评价', z: './images/icons/gengduo@2x.png'},
			{img: './images/icons/left06', text: '收货地址', z: './images/icons/gengduo@2x.png'}
		]

		$scope.data = [
			{one: 'ion-ios-home', two: 'ion-ios-home-outline', three: '首页', url: 'public.home'},
			{one: 'ion-ios-keypad', two: 'ion-ios-keypad-outline', three: '分类', url:'public.class'},
			{one: 'ion-ios-cart', two: 'ion-ios-cart-outline', three: '购物车', url: 'shopping'},
			{one: 'ion-ios-person', two: 'ion-ios-person-outline', three: '我的', url: 'mine'}
		]
		$scope.goPage = function(){
			$state.go('setup');
		}
		$scope.one= function(){
			$state.go('shoppingone')
		}
	}])