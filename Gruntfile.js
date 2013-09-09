module.exports = function (grunt) {
    // Конфигурация проекта
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------
        less: { // Task less
            options: {
                expand: true
            },
            dev: { // Target
                options: {
                    strictMath: true
                },
                files: {
                    'output/css/all.css': ['less/all.less']
                }
            },
            release: { // Target
                options: {
                    strictMath: true,
                    yuicompress: true
                },
                files: {
                    'output/css/all.css': ['less/all.less']
                }
            }
        },
        //------------------------------------------------------------
        swig: {
          dev: {
            init: {
                root: "source/",
                allowErrors: false,
                autoescape: true
            },
            dest: "raw-html/",
            cwd: "source/",
            src: ['**/*.swig'],
            generateSitemap: false,
            generateRobotstxt: false,
            siteUrl: 'http://mydomain.net/',
            production: false,
            fb_appid: '1349v',
            ga_account_id: 'UA-xxxxxxxx-1',
            robots_directive: 'Disallow /',
            sitemap_priorities: {
                '_DEFAULT_': '0.5',
                'index': '0.8',
                'subpage': '0.7'
            }
          }
        },
        //------------------------------------------------------------
        prettify: {
            options: {
                "indent": 4,
                "condense": true,
                "indent_inner_html": true,
                "unformatted": [
                    "a",
                    "pre"
                ],
                "preserve_newlines": true
            },
            all: {
                expand: true,
                cwd: 'raw-html/',
                ext: '.html',
                src: ['*.html'],
                dest: 'output/'
            },
        },
        //------------------------------------------------------------
        /*concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
                dest: 'dist/built.js'
            }
        },*/
        //------------------------------------------------------------
        /*uglify: {
            my_target: {
                files: {
                    'dest/all.min.js': ['src/input1.js', 'src/input2.js']
                }
            }
        },*/
        //------------------------------------------------------------
        watch: {
            less: {
                files: 'less/**',
                tasks: ['less:dev'],
                options: {
                    interrupt: true
                }
            },
            swig: {
                files: 'source/**',
                tasks: ['swig:dev'],
                options: {
                    interrupt: true
                }
            },
            prettify: {
                files: 'raw-html/**',
                tasks: ['prettify:all'],
                options: {
                    interrupt: true
                }
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['output/**']
            }
        }
        //------------------------------------------------------------
    });
    // Инициализация плагинов, таски которых мы вызываем
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-swig');
    grunt.loadNpmTasks('grunt-prettify');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};