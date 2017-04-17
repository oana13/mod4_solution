(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/MenuApp/Templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
