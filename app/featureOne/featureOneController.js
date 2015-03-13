(function() {
    'use strict';
    
    angular
    .module('my-app.featureone')
    .controller('FeatureOneController', FeatureOneController);
    
    function FeatureOneController() {
        var vm = this;
        vm.text = "Feature 1";
    }
})();