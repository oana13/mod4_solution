(function(){
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/MenuApp/Templates/home.template.html'
    })
    .state('mainList', {
      url: '/mainList',
      templateUrl: 'src/MenuApp/Templates/categories.template.html',
      controller: 'MainCategoriesController as mainList',
      resolve: {
        items: ['CategoriesService', function(CategoriesService){
          return CategoriesService.getAllCategories();
        }]
      }
    })
    .state('categoryItems',{
      url: '/categoryItems/{catId}',
      templateUrl: 'src/MenuApp/Templates/items.template.html',
      controller: 'ItemDetailController as categoryItems',
      resolve: {
        items: ['$stateParams', 'CategoriesService', function ($stateParams, CategoriesService){
          console.log($stateParams);
          return CategoriesService.getItemsForCategory($stateParams.catId)
        }]
      }
    });
}
})();
