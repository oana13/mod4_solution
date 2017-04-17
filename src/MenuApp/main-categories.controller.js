(function (){
  'use strict';
  angular.module('MenuApp')
  .controller('MainCategoriesController', MainCategoriesController);

  //MainCategoriesController.$inject = ['CategoriesService'];
  //function MainCategoriesController(CategoriesService){
  MainCategoriesController.$inject = ['items'];
  function MainCategoriesController(items){
    var mainList = this;
    //console.log(items);
    mainList.items = items.data;
  }
})();
