(function() {
    'use strict';
    
    angular
    .module('my-app.featureone')
    .controller('FeatureOneController', FeatureOneController);
    
    FeatureOneController.$inject = ['FruitDataService'];
    
    function FeatureOneController(fruitDataService) {
        var vm = this;
        vm.text = "Feature 1";
        vm.fruits = fruitDataService.getFruits();
    }
})();