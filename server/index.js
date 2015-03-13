(function() {
    'use strict';
    
    module.exports = {
        index: function(req, res) {
            res.render('index');
        },
        templates: function(req, res) {
            var templateName = req.params.name;
            res.render('templates/' + templateName);
        }
    };
})();