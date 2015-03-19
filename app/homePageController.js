(function() {
    'use strict';
    
    angular
    .module('my-app')
    .controller('HomePageController', HomePageController);
    
    HomePageController.$inject = ['FeatureOneService', 'FeatureTwoService'];
    
    function HomePageController(featureOneService, featureTwoService) {
        var vm = this;
        vm.text = "Home";
        vm.servicesAvailable = [
            featureOneService.getFeatureName(),
            featureTwoService.getFeatureName()
        ];
    }
})();