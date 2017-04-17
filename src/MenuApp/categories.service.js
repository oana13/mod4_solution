(function(){
  'use strict';

  angular.module('MenuApp')
  .service('CategoriesService', CategoriesService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  CategoriesService.$inject=['$http','ApiBasePath'];
    function CategoriesService($http, ApiBasePath){
      var service = this;
      var items = [];
      var categoryItems = [];

      service.getAllCategories = function(){
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/categories.json"),
          cache: true
        });
        return response;
      };
      service.getItemsForCategory = function(cat){
        var cat1 = cat.split('-');
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json?category=" + cat1[0]),
          cache: true
        });
        return response;
      };
     };
})();
