angular.module('app')
	.controller('classController',['$scope','$state',function($scope,$state){
		$scope.list = [
			'推荐产品',
			'被芯',
			'套件',
			'毯类',
			'蚕丝被',
			'枕芯枕套',
			'婴童系列',
			'真丝蚕丝被',
			'旅游产品',
			'私人订制'
		]

		$scope.data = [
			{img:'./images/img/yinhuasijiantao@2x.png', name: '印花四件套'},
			{img:'./images/img/huoxingsijiantao@2x.png', name: '活性四件套'},
			{img:'./images/img/quanbu@2x.png', name: '大提花四件套'},
			{img:'./images/img/yinhuasijiantao@2x.png', name: '色织提花四件'},
			{img:'./images/img/sezhitihuasijiantao@2x.png', name: '纯色四件套'},
			{img:'./images/img/zhensisijiantao@2x.png', name: '真丝四件套'},
			{img:'./images/img/sanDliticixiuliujiantao@2x.png', name: '3D立体刺绣六件套'},
			{img:'./images/img/zhifuyemian@2x.png', name: '复古奢华六件'}
		]

		$scope.product = function(){
			$state.go('product')
		}
	}])