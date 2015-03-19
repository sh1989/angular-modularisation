(function() {
    'use strict';
    
    angular
    .module('my-app.featureone.core')
    .factory('FeatureOneService', FeatureOneService);
    
    function FeatureOneService() {
        return {
            getFeatureName: function() {
                return "Feature 1";
            }
        };
    }
})();