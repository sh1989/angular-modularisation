(function() {
    'use strict';
    
    angular
    .module('my-app.core')
    .controller('HomePageController', HomePageController);
    
    function HomePageController() {
        var vm = this;
        vm.text = "Home";
    }
})();