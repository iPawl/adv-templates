module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* Объединяем (конкатенируем) все файлы в build.js */
        concat: {
            options: {
                separator: ';'  // предотвращаем склеивание js кода без точек с запятой
            },
            dist: {
                src: [
                    'js/jquery-1.9/jquery-1.9.1.js',           // Jquery
                    'js/jquery-ui-1.10.3/jquery.ui.widget.js', // Фабрика виджетов
                    'js/plugins/tiny-pubsub.js',               // Pub/Sub, магистраль данных от виджетов
                    'blocks/**/*.js',                          // Виджеты БЭМ блоков
                    'js/main/main.js'
                ],
                dest: 'js/build.js'
            }
        },

        /* Минифицируем и обфусцируем в build.min.js */
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n' // коменты
            },
            dist: {
                files: {
                    'js/build.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //grunt.registerTask('default', ['concat']);

    grunt.registerTask('default', ['concat', 'uglify']);

};