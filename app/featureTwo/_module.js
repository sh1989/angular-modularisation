(function() {
    'use strict';

    angular
    .module('my-app.featuretwo', ['my-app.featuretwo.core', 'my-app.featureone.core', 'my-app.core'])
    .config(FeatureTwo);
    
    function FeatureTwo() {
    }
})();