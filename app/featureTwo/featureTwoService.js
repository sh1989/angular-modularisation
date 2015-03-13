(function() {
    'use strict';
    
    angular
    .module('my-app.featuretwo')
    .factory('FeatureTwoService', FeatureTwoService);
    
    function FeatureTwoService() {
        return {
            getFeatureName: function() {
                return "Feature 2";
            }
        };
    }
})();