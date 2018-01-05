angular.module('app')
	.controller('homeController',['$scope',function($scope){
		$scope.data = [
			{img: './images/img/banner@2x.png'},
			{img: './images/img/banner@2x.png'},
			{img: './images/img/banner@2x.png'}
		]

		$scope.list = [
			{img: './images/img/taojian@2x.png', text: '套装'},
			{img: './images/img/beizixilie@3x.png', text: '被子系'},
			{img: './images/img/yingtongxilie@2x.png', text: '婴童系'},
			{img: './images/img/dinzhi@2x.png', text: '定制'},
			{img: './images/img/huodong@2x.png', text: '活动'}
		]

		$scope.datalist = [
			'./images/img/remaizhuanqu@2x.png',
			'./images/img/remaizhuanqu2@2x.png',
			'./images/img/remaizhuanqu3@2x.png'
		]

		$scope.datalisttwo = [
			{img: './images/img/tuijianshangpin@2x.png', text: '薄款长款真丝纱巾'},
			{img: './images/img/tuijianshangpin2@2x.png', text: '纯色真丝披肩丝巾'},
			{img: './images/img/tuijianshangpin3@2x.png', text: '真丝长款雪纺纱巾'}
		]

		$scope.lie = [
			'./images/img/youxuanqingdan@2x.png',
			'./images/img/youxuanqingdan2@2x.png',
			'./images/img/youxuanqingdan5@2x.png',
			'./images/img/youxuanqingdan6@2x.png'
		]

		$scope.lietwo = [
			'./images/img/youxuanqingdan3@2x.png',
			'./images/img/youxuanqingdan4@2x.png',
			'./images/img/youxuanqingdan7@2x.png',
			'./images/img/youxuanqingdan8@2x.png'
		]

		$scope.footer = [
			{img:'./images/img/weinituijian@2x.png', text:'丝滑真丝四件套桑蚕丝床品套件床单', content:'￥2299', end:'129人付款'},
			{img:'./images/img/weinituijian2@2x.png', text:'夏凉被100%桑蚕丝被双人空调薄被夏被', content:'￥3299', end:'89人付款'},
		]

		$scope.foot = [
			
			{img:'./images/img/weinituijian3@2x.png', text:'蒲公英之恋四件套桑蚕丝床品套件床单', content:'￥4599', end:'169人付款'},
			{img:'./images/img/weinituijian4@2x.png', text:'夏凉被100%桑蚕丝被田园风四件套', content:'￥2399', end:'219人付款'}
		]

		$scope.good = [
			{text:'优质蚕丝被与你的肌肤舒适亲吻', t: '有助于良好睡眠',},
			{text:'蚕丝割绒毯恒温保暖', t: '牛奶般顺滑 舒适每一晚',}	
		]

		$scope.title = {
			img:'./images/icons/huo@2x.png',
			image: './images/icons/youxuan@2x.png',
			picture: './images/icons/gengduo1@2x.png',
			text: '更多',
			t: '热卖专区',
			content: '推存商品',
			d: '优选清单'
		}

		$scope.p = [
			'./images/icons/icon.png'
		]
	}])