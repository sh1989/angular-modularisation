(function() {
    'use strict';

    angular
    .module('my-app', [
        'my-app.featureone.core',
        'my-app.featuretwo.core',
        'my-app.core',
        'my-app.featureone',
        'my-app.featuretwo'
        ])
    .config(MyApp);
    
    MyApp.$inject = ['$routeProvider', '$locationProvider'];

    function MyApp($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
            templateUrl: 'templates/home',
            controller: 'HomePageController',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/' });
    }
})();