(function() {
    'use strict';
    
    angular
    .module('my-app.featuretwo')
    .controller('FeatureTwoController', FeatureTwoController);
    
    function FeatureTwoController() {
        var vm = this;
        vm.text = "Feature Two";
    }
})();