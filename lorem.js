 var app = angular.module('websiteModule');
 app.directive('lorem', function (){
   return{
     restrict:'E',
     templateUrl: 'lorem.html',
     replace: false
   }


 })
