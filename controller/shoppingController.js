angular.module('app')
	.controller('shoppingController',['$scope','$state',function($scope,$state){
		$scope.data = [
			{one: 'ion-ios-home', two: 'ion-ios-home-outline', three: '首页', url: 'public.home'},
			{one: 'ion-ios-keypad', two: 'ion-ios-keypad-outline', three: '分类', url:'public.class'},
			{one: 'ion-ios-cart', two: 'ion-ios-cart-outline', three: '购物车', url: 'shopping'},
			{one: 'ion-ios-person', two: 'ion-ios-person-outline', three: '我的', url: 'mine'}
		]
    $scope.sum=0;
		$scope.list = [
			{
        text: '复古奢华六件套', 
        content: '领券 | 编辑',
         img: './images/img/zhifuyemian@2x.png', 
         h2:'奢华复古欧式贡缎结婚四件套3D浮雕大提花婚庆六件套', 
         p: '罗纳花畔咖—床单六件套', 
         num: '￥3316', 
         dj: 'x1',
         isSelected:false
       },
			{
        text: '复古奢华六件套', 
        content: '领券 | 编辑',
         img: './images/img/zhifuyemian@2x.png', 
         h2:'奢华复古欧式贡缎结婚四件套3D浮雕大提花婚庆六件套', 
         p: '罗纳花畔咖—床单六件套', 
         num: '￥3316',
          dj: 'x1',
          isSelected:false
        },
			{
        text: '复古奢华六件套', 
        content: '领券 | 编辑', 
        img: './images/img/zhifuyemian@2x.png', 
        h2:'奢华复古欧式贡缎结婚四件套3D浮雕大提花婚庆六件套',
         p: '罗纳花畔咖—床单六件套', 
         num: '￥3316',
         dj: 'x1',
         isSelected:false
       }
		]
      
      $scope.change=function(checked,index){
         let arr=[];
         let a=Number($scope.list[index].dj.substr(1));
         let b=Number($scope.list[index].num.substr(1));
        if(checked){
          $scope.sum+=(b);
          for(let i=0;i<$scope.list.length;i++){
              if($scope.list[i].isSelected){
                    arr.push(1);
              }
          }
          
          
          if(arr.length == $scope.list.length ){
            $scope.a =true;
          }
          }else{
            $scope.a=false;
            $scope.sum-=(b);
          }
      }

      $scope.a=false;
      $scope.check=function(){
        $scope.sum=0;
	      	if($scope.a){
	      		for(let i=0;i<$scope.list.length;i++){
	      		$scope.list[i].isSelected = true;
            let a=Number($scope.list[i].dj.substr(1));
            let b=Number($scope.list[i].num.substr(1));
            $scope.sum+=(b);
	      	}
	      	}else{
	      		for(let i=0;i<$scope.list.length;i++){
	      		$scope.list[i].isSelected = false;
            $scope.sum=0;
	      	}
	      	}	
      }

      
      
	}])