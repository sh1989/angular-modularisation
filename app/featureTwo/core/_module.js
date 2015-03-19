(function() {
    'use strict';
    
    angular
    .module('my-app.featuretwo.core', ['my-app.core'])
    .config(FeatureTwoCore);
    
    FeatureTwoCore.$inject = ['$routeProvider'];
    
    function FeatureTwoCore($routeProvider) {
        $routeProvider.when('/featuretwo', {
            templateUrl: 'templates/featuretwo',
            controller: 'FeatureTwoController',
            controllerAs: 'vm'
        });
    }
})();