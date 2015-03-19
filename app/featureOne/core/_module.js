(function() {
    'use strict';
    
    angular
    .module('my-app.featureone.core', ['my-app.core'])
    .config(FeatureOneCore);
    
    FeatureOneCore.$inject = ['$routeProvider'];
    
    function FeatureOneCore($routeProvider) {
        $routeProvider.when('/featureone', {
            templateUrl: 'templates/featureone',
            controller: 'FeatureOneController',
            controllerAs: 'vm'
        });
    }
})();