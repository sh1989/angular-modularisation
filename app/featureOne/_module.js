(function() {
    'use strict';

    angular
    .module('my-app.featureone', ['my-app.core', 'my-app.components'])
    .config(FeatureOne);
    
    FeatureOne.$inject = ['$routeProvider'];
    
    function FeatureOne($routeProvider) {
        $routeProvider.when('/featureone', {
            templateUrl: 'templates/featureone',
            controller: 'FeatureOneController',
            controllerAs: 'vm'
        });
    }
})();