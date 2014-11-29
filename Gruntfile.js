/*
 * 不同livereload端口设置
 * connect livereload端口设置不同的值
 * watch 下的livrereload 与其一一对应
 *
 */
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        watch: {
            demo: {
                files: ['web/*.*'],
                options: {
                    livereload: 5000
                }
            },
            dev: {
                files: ['web1/*.*'],
                options: {
                    livereload: 3030
                }
            }
        },
        connect: {
            demo: {
                options: {
                    base: "web",
                    port: 1111,
                    hostname: '*',
                    livereload: 5000,
                    open: {
                        target: 'http://127.0.0.1:1111'
                    }
                }
            },
            dev: {
                options: {
                    base: "web1",
                    port: 2222,
                    hostname: '*',
                    livereload: 3030,
                    open: {
                        target: 'http://127.0.0.1:2222'
                    }
                }
            }
        }
    });
    grunt.registerTask('demo', ['connect:demo', 'watch:demo']);
    grunt.registerTask('dev', ['connect:dev', 'watch:dev']);
};

