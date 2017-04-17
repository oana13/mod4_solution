(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items','$stateParams']
function ItemDetailController(items, $stateParams) {
  var categoryItems = this;
  var cat = $stateParams.catId.split('-');
  console.log(items);
  categoryItems.items = items.data.menu_items;
  categoryItems.name = cat[1];
  console.log(categoryItems);
}

})();
