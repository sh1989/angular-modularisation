(function() {
    'use strict';
    
    angular
    .module('my-app.featuretwo')
    .controller('FeatureTwoController', FeatureTwoController);
    
    FeatureTwoController.$inject = ['FeatureOneService'];
    
    function FeatureTwoController(featureOneService) {
        var vm = this;
        vm.text = "Feature Two";
        vm.otherSource = featureOneService.getFeatureName();
    }
})();