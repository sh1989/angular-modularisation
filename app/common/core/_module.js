(function() {
    'use strict';

    angular
    .module('my-app.core', ['ngRoute'])
    .config(Core);
    
    Core.$inject = ['$routeProvider', '$locationProvider'];
    
    function Core($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
            templateUrl: 'templates/home',
            controller: 'HomePageController',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/' });
    }
})();