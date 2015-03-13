(function() {
    'use strict';
    
    angular
    .module('my-app.featureone')
    .factory('FeatureOneService', FeatureOneService);
    
    function FeatureOneService() {
        return {
            getFeatureName: function() {
                return "Feature 1";
            }
        };
    }
})();