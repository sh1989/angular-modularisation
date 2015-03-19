(function() {
    'use strict';

    angular
    .module('my-app.featureone', ['my-app.featureone.core', 'my-app.featuretwo.core', 'my-app.core', 'my-app.components'])
    .config(FeatureOne);
    
    function FeatureOne() {
    }
})();