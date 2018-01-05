angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider

			.state('public',{
				url: '',
				abstruct: true,
				templateUrl: './views/home/public.html',
				controller: 'publicController',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('public');
					}]
					
				}
			})
			.state('public.home',{
				url: '/home',
				templateUrl: './views/home/home.html',
				controller: 'homeController',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('home');
					}]
				}
			})

			.state('public.class',{
				url: '/class',
				templateUrl: './views/home/class.html',
				controller: 'classController',
				resolve: {
					des: ['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('class');
					}]
				}
			})

			.state('shopping',{
				url: '/shopping',
				templateUrl: './views/shopping/shopping.html',
				controller: 'shoppingController',
				resolve: {
					des: ['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('shopping');
					}]
				}
			})

			.state('mine',{
				url: '/mine',
				templateUrl: './views/mine/mine.html',
				controller: 'mineController',
				resolve: {
					des: ['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('mine');
					}]
				}
			})

			.state('shoppingone',{
				url: '/shoppingone',
				templateUrl: './views/shopping/shoppingone.html',
				controller: 'shoppingoneController',
				resolve: {
					des: ['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('shoppingone');
					}]
				}
			})

			.state('shoppingtwo',{
				url: '/shoppingtwo',
				templateUrl: './views/shopping/shoppingtwo.html',
				controller: 'shoppingtwoController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('shoppingtwo');
					}]
				}
			})

			.state('shoppingthree',{
				url: '/shoppingthree',
				templateUrl: './views/shopping/shoppingthree.html',
				controller: 'shoppingthreeController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('shoppingthree');
					}]
				}
			})

			.state('shoppingfour',{
				url: '/shoppingfour',
				templateUrl: './views/shopping/shoppingfour.html',
				controller: 'shoppingfourController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('shoppingfour');
					}]
				}
			})

			.state('product',{
				url: '/product',
				templateUrl: './views/product/product.html',
				controller: 'productController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('product');
					}]
				}
			})

			.state('assess',{
				url: '/assess',
				templateUrl: './views/assess/assess.html',
				controller: 'assessController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('assess');
					}]
				}
			})

			.state('assesstwo',{
				url: '/assesstwo',
				templateUrl: './views/assess/assesstwo.html',
				controller: 'assesstwoController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('assesstwo');
					}]
				}
			})

			.state('login',{
				url: '/login',
				templateUrl: './views/login/login.html',
				controller: 'loginController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('login');
					}]
				}
			})

			.state('register',{
				url: '',
				templateUrl: './views/register/register.html',
				controller: 'registerController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('register');
					}]
				}
			})

			.state('register.registerone',{
				url: '/registerone',
				templateUrl: './views/register/registerone.html',
				controller: 'registeroneController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('registerone');
					}]
				}
			})

			.state('register.registertwo',{
				url: '/registertwo',
				templateUrl: './views/register/registertwo.html',
				controller: 'registertwoController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('registertwo');
					}]
				}
			})

			.state('register.registerthree',{
				url: '/registerthree',
				templateUrl: './views/register/registerthree.html',
				controller: 'registerthreeController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('registerthree');
					}]
				}
			})

			.state('setup',{
				url: '/setup',
				templateUrl: './views/setup/setup.html',
				controller: 'setupController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('setup');
					}]
				}
			})

			.state('data',{
				url: '/data',
				templateUrl: './views/setup/data.html',
				controller: 'dataController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('data');
					}]
				}
			})

			.state('account',{
				url: '/account',
				templateUrl: './views/setup/account.html',
				controller: 'accountController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('account');
					}]
				}
			})

			.state('privacy',{
				url: '/privacy',
				templateUrl: './views/setup/privacy.html',
				controller: 'privacyController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('privacy');
					}]
				}
			})

			.state('new',{
				url: '/new',
				templateUrl: './views/setup/new.html',
				controller: 'newController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('new');
					}]
				}
			})

			.state('orderone',{
				url: '/orderone',
				templateUrl: './views/order/orderone.html',
				controller: 'orderoneController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('orderone');
					}]
				}
			})

			.state('ordertwo',{
				url: '/ordertwo',
				templateUrl: './views/order/ordertwo.html',
				controller: 'ordertwoController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('ordertwo');
					}]
				}
			})

			.state('orderthree',{
				url: '/orderthree',
				templateUrl: './views/order/orderthree.html',
				controller: 'orderthreeController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('orderthree');
					}]
				}
			})

			.state('orderfour',{
				url: '/orderfour',
				templateUrl: './views/order/orderfour.html',
				controller: 'orderfourController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('orderfour');
					}]
				}
			})

			.state('orderfive',{
				url: '/orderfive',
				templateUrl: './views/order/orderfive.html',
				controller: 'orderfiveController',
				resolve: {
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('orderfive');
					}]
				}
			})

			
	}])