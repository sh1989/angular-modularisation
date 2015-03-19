module.exports = function(grunt) {
    
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        clean: ['public'],
        jshint: {
            all: [
                'Gruntfile.js',
                'app/**/*.js',
                'server/**/*.js',
                'app.js'
            ],
            options: {
                "scripturl": true
            }
        },
        uglify: {
            js: {
                options: {
                    compress: {},
                    mangle: true,
                    sourceMap: true
                },
                src: [
                    'app/common/core/**/*.js',
                    'app/common/components/**/*.js',
                    'app/featureOne/**/*.js',
                    'app/featureTwo/**/*.js',
                    'app/*.js'
                ],
                dest: 'public/js/app.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        nonull: true,
                        src: "node_modules/angular/angular.min.js",
                        dest: "public/js/lib/angular.min.js"
                    },
                    {
                        nonull: true,
                        src: "node_modules/angular/angular.min.js.map",
                        dest: "public/js/lib/angular.min.js.map"
                    },
                    {
                        nonull: true,
                        src: "node_modules/angular-route/angular-route.min.js",
                        dest: "public/js/lib/angular-route.min.js"
                    },
                    {
                        nonull: true,
                        src: "node_modules/angular-route/angular-route.min.js.map",
                        dest: "public/js/lib/angular-route.min.js.map"
                    }
                ]
            }
        },
        express: {
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        },
        watch: {
            dev: {
                files: [
                    'app/**/*.js',
                    'server/**/*.js',
                    'views/**/*.jade',
                    'app.js'
                ],
                tasks: [
                    'build',
                    'express:dev'
                ],
                options: {
                    spawn: false
                }
            }
        }
    });
    
    grunt.registerTask('build', ['clean', 'jshint', 'uglify', 'copy']);
    grunt.registerTask('serve', ['express:dev', 'watch:dev']);
    grunt.registerTask('default', ['build', 'serve']);
};
