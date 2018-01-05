(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
			 		name: 'public',
			 		files: [
			 			'./controller/publicController.js',
			 			'./css/index.css'
			     ]},
                 {
			 		name: 'home',
			 		files: [
			 			'./controller/homeController.js',
			 			'./views/home/home.css'
			 	]},

			 	{
			 		name: 'class',
			 		files: [
			 			'./controller/classController.js',
			 			'./views/home/class.css'
			 		]
			 	},

			 	{
			 		name: 'shopping',
			 		files: [
			 			'./controller/shoppingController.js',
			 			'./views/shopping/shopping.css'
			 		]
			 	},

			 	{
			 		name: 'mine',
			 		files: [
			 			'./controller/mineController.js',
			 			'./views/mine/mine.css'
			 		]
			 	},

			 	{
			 		name: 'shoppingone',
			 		files: [
			 			'./controller/shoppingoneController.js',
			 			'./views/shopping/shoppingone.css'
			 		]
			 	},

			 	{
			 		name: 'shoppingtwo',
			 		files: [
			 			'./controller/shoppingtwoController.js',
			 			'./views/shopping/shoppingtwo.css'
			 		]
			 	},

			 	{
			 		name: 'shoppingthree',
			 		files: [
			 			'./controller/shoppingthreeController.js',
			 			'./views/shopping/shoppingthree.css'
			 		]
			 	},

			 	{
			 		name: 'shoppingfour',
			 		files: [
			 			'./controller/shoppingfourController.js',
			 			'./views/shopping/shoppingfour.css'
			 		]
			 	},

			 	{
			 		name: 'shoppingfive',
			 		files: [
			 			'./controller/shoppingfiveController.js',
			 			'./views/shopping/shoppingfive.css'
			 		]
			 	},

			 	{
			 		name: 'product',
			 		files: [
			 			'./controller/productController.js',
			 			'./views/product/product.css'
			 		]
			 	},

			 	{
			 		name: 'assess',
			 		files: [
			 			'./controller/assessController.js',
			 			'./views/assess/assess.css'
			 		]
			 	},

			 	{
			 		name: 'assesstwo',
			 		files: [
			 			'./controller/assesstwoController.js',
			 			'./views/assess/assesstwo.css'
			 		]
			 	},

			 	{
			 		name: 'login',
			 		files: [
			 			'./controller/loginController.js',
			 			'./views/login/login.css'
			 		]
			 	},

			 	{
			 		name: 'register',
			 		files: [
			 			'./controller/registerController.js',
			 			'./views/register/register.css'
			 		]
			 	},

			 	{
			 		name: 'registerone',
			 		files: [
			 			'./controller/registeroneController.js',
			 			'./views/register/register.css'
			 		]
			 	},

			 	{
			 		name: 'registertwo',
			 		files: [
			 			'./controller/registertwoController.js',
			 			'./views/register/register.css'
			 		]
			 	},

			 	{
			 		name: 'registerthree',
			 		files: [
			 			'./controller/registerthreeController.js',
			 			'./views/register/register.css'
			 		]
			 	},

			 	{
			 		name: 'setup',
			 		files: [
			 			'./controller/setupController.js',
			 			'./views/setup/setup.css'
			 		]
			 	},

			 	{
			 		name: 'data',
			 		files: [
			 			'./controller/dataController.js',
			 			'./views/setup/data.css'
			 		]
			 	},

			 	{
			 		name: 'account',
			 		files: [
			 			'./controller/accountController.js',
			 			'./views/setup/account.css'
			 		]
			 	},

			 	{
			 		name: 'privacy',
			 		files: [
			 			'./controller/privacyController.js',
			 			'./views/setup/privacy.css'
			 		]
			 	},

			 	{
			 		name: 'new',
			 		files: [
			 			'./controller/newController.js',
			 			'./views/setup/new.css'
			 		]
			 	},

			 	{
			 		name: 'orderone',
			 		files: [
			 			'./controller/orderoneController.js',
			 			'./views/order/orderone.css'
			 		]
			 	},

			 	{
			 		name: 'ordertwo',
			 		files: [
			 			'./controller/ordertwoController.js',
			 			'./views/order/ordertwo.css'
			 		]
			 	},

			 	{
			 		name: 'orderthree',
			 		files: [
			 			'./controller/orderthreeController.js',
			 			'./views/order/orderthree.css'
			 		]
			 	},

			 	{
			 		name: 'orderfour',
			 		files: [
			 			'./controller/orderfourController.js',
			 			'./views/order/orderthree.css'
			 		]
			 	},

			 	{
			 		name: 'orderfive',
			 		files: [
			 			'./controller/orderfiveController.js',
			 			'./views/order/orderfive.css'
			 		]
			 	}
			 	
	 		]
 		});
	}]);
	
})();