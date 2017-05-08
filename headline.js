var app=angular.module('websiteModule');
app.directive('headline', function(){
  return{
    restrict: 'C',
    template: '<h2> Change the Headline </h2>',
    replace: true
  }


});
