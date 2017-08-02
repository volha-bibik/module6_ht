module.exports = function(grunt) {

    var platform = grunt.option('platform');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        protractor_webdriver: {
            options: {
                path: 'node_modules/protractor/bin/',
                keepAlive: true
            },
            update: {
                options: {
                    command: 'webdriver-manager update'
                }
            },
            start: {
                options: {
                    command: 'webdriver-manager start'
                }
            }
        },

        protractor: {
            options: {
                keepAlive: true,
            },
            all: {
                options: {
                    configFile: 'protractor.conf.js',
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: ['@search, @edit, @remove']
                        }
                    }
                }
            },
            remove: {
                options: {
                    configFile: 'protractor.conf.js',
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: ['@remove']
                        }
                    }
                }
            },
            edit: {
                options: {
                    configFile: 'protractor.conf.js',
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: ['@edit']
                        }
                    }
                }
            },
            search: {
                options: {
                    configFile: 'protractor.conf.js',
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        cucumberOpts: {
                            tags: ['@search']
                        }
                    }
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');

    grunt.registerTask('test', 'Run tests', function(target) {

        if (platform){
            process.env.PLATFORM=platform;
        }

        if(!process.env.PLATFORM){
            process.env.PLATFORM='desktop';
        }

        if(process.env.PLATFORM !== 'desktop' && process.env.PLATFORM !== 'tablet'){
            throw Error('Wrong type of platform: '+process.env.PLATFORM+'. Should be desktop or tabletL.');
        }

        target = target || 'all';

        grunt.task.run(['protractor:'+target]);
    });

    grunt.registerTask('start', 'prepare for running', function() {
        grunt.task.run(['protractor_webdriver:start']);
    });

};
