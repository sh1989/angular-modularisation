(function() {
    'use strict';
    
    angular
    .module('my-app.components')
    .directive('oneAddOne', OneAddOne);
    
    function OneAddOne() {
        return {
            restrict: 'E',
            controller: OneAddOneController,
            controllerAs: 'vm',
            templateUrl: 'templates/oneaddone',
            scope: {
            }
        };
    }
    
    function OneAddOneController() {
        var vm = this;
        this.answer = 2;
    }    
})();