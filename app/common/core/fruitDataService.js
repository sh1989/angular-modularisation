(function() {
    'use strict';
    
    angular
    .module('my-app.core')
    .factory('FruitDataService', FruitDataService);
    
    FruitDataService.$inject = [];
    
    function FruitDataService() {
        return {
            getFruits: function() {
                return [ 'Apples', 'Bananas', 'Pears' ];
            }
        };
    }
})();