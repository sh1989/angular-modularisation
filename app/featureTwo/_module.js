(function() {
    'use strict';

    angular
    .module('my-app.featuretwo', ['my-app.core', 'my-app.components', 'my-app.featureone'])
    .config(FeatureTwo);
    
    FeatureTwo.$inject = ['$routeProvider'];
    
    function FeatureTwo($routeProvider) {
        $routeProvider.when('/featuretwo', {
            templateUrl: 'templates/featuretwo',
            controller: 'FeatureTwoController',
            controllerAs: 'vm'
        });
    }
})();