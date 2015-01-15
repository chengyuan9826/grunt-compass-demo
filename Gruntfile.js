/*
 * compass demo
 * 三种模式
 * cps：编译一次
 * dev：监测变化,执行编译
 * serve:监测变化，执行编译,刷新页面
 */
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        compass: {
            dev: {
                options: {
                    sassDir: "src/scss",
                    cssDir: "src/css",
                    imagesDir: "src/images",
                    outputStyle: "nested",
                    /*nested、expanded、compact、compressed */
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'src/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        watch: {
            dev: {
                files: ["src/scss/{,*/}*.*", "src/images/icon/*.*"],
                tasks: ["sass"],
                options: {
                    livereload: 5000
                }
            }
        },
        connect: {
            dev: {
                options: {
                    base: ".",
                    "port": "1024",
                    hostname: "*",
                    livereload: 5000,
                    open: {
                        target: "http://127.0.0.1:1024/src/index.html"
                    }
                }
            }
        }
    })
    grunt.registerTask("sss", ['sass']); //运行一次执行一次编译
    grunt.registerTask("cps", ['compass:dev']);
    grunt.registerTask("dev", ["compass:dev", "watch:dev"]); //监测文件变化
    grunt.registerTask("serve", ["connect:dev", "sass", "watch:dev"]); //监测文件变化并刷新页面

};
