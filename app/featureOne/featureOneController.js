(function() {
    'use strict';
    
    angular
    .module('my-app.featureone')
    .controller('FeatureOneController', FeatureOneController);
    
    FeatureOneController.$inject = ['FruitDataService', 'FeatureTwoService'];
    
    function FeatureOneController(fruitDataService, featureTwoService) {
        var vm = this;
        vm.text = "Feature 1";
        vm.fruits = fruitDataService.getFruits();
        vm.otherSource = featureTwoService.getFeatureName();
    }
})();