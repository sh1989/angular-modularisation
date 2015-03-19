(function() {
    'use strict';

    angular
    .module('my-app.featuretwo', ['my-app.featuretwo.core', 'my-app.featureone.core', 'my-app.core', 'my-app.components'])
    .config(FeatureTwo);
    
    function FeatureTwo() {
    }
})();