(function() {
    'use strict';

    angular
    .module('my-app', [
        'my-app.core',
        'my-app.components',
        'my-app.featureone',
        'my-app.featuretwo'
        ])
    .config(MyApp);
    
    function MyApp() {
    }
})();