module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: [
                    'src/trove.js',
                    'src/work.js',
                    'src/search.js',
                    'src/list.js',
                    'src/person.js',
                    'src/article.js',
                    'src/picture.js',
                    'src/book.js',
                    'src/map.js',
                    'src/music.js',
                    'src/collection.js',
                    'src/newspaper_article.js',
                    'src/newspaper_title.js',
                    'src/newspaper_list.js'
                ],
                dest: 'dist/<%= pkg.name %>.js',
                options: {
                    banner: '',
                    footer: ''
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 3000,
                    base: '.'
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        qunit: {
            all: {
                options: {
                    timeout: 20000,
                    urls: [
                        'http://localhost:3000/test/test.html',
                    ],
                    page: {
                        settings: {
                            userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:44.0) Gecko/20100101 Firefox/44.0'
                        }
                    }
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        jsdoc: {
            dist: {
                src: ['README.md', 'src/*.js', 'test/*.js'],
                options: {
                    destination: 'docs'
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask('test', ['jshint', 'connect', 'qunit']);
    grunt.registerTask('prepare', ['jshint', 'jsdoc', 'concat', 'uglify']);
    grunt.registerTask('default', ['jshint', 'connect', 'qunit', 'concat', 'uglify']);

};
